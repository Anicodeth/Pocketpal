const express = require('express');
const mongoose = require('mongoose');
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const { User } = require('./Models/user');
const { json } = require('express');


app.use(cors());


//Open Ai Api Configuration
const config = new Configuration({
  apiKey:  "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"
});
const openai = new OpenAIApi(config);

mongoose.connect('mongodb+srv://afmtoday:OlxwPFCF0rLMnA3e@cluster0.edrrjyh.mongodb.net/pocketpal?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB', err));


// Middleware to parse JSON request bodies
app.use(express.json());


const sessionTrial = 5;
const requestAi =async (prompt, sessionTrial, callback) => {
  const response = await openai.createCompletion(
  {
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 1,
      max_tokens: 2048} ).catch(err => {
        console.log(err);
          console.log("Error connecting");

      });

  console.log(sessionTrial);
  if(response){
  callback({aianswer: (response.data.choices[0].text).replaceAll("\n", "") });}
  else if(sessionTrial == 0){
      callback({aianswer : "The Ai is too Crowded!"});
  }
  else{
      console.log("Retrying...")
      requestAi(prompt,  sessionTrial - 1, callback);
  }
}


app.get('/ai/:prompt', async (req, res) =>{

  //Passed Query
  const prompt = (req.params.prompt);

  //Search if job already exists in database
  
          //Call Ai function
          requestAi(prompt,sessionTrial, 
          async (answer)=> {
          res.json(answer);
});
});

// Endpoint for user sign-up
app.post('/signup', async (req, res) => {
  try {
    // Create a new user document based on the request body
    const user = new User(req.body);
    // Save the new user to the database
    await user.save();
    // Return a success message and the newly created user document
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    // Return an error message if the user creation fails
    res.status(400).json({ error: error.message });
  }
});


app.post('/signin', async (req, res) => {
  try {
    // Check if the email and password are valid
    const { email, password } = req.body;
    const user = await User.findOne({email: email, password: password});
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Generate a JWT for the user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "Ananya");

    // Return the user and token in the response
    res.json({ user, token });
  } catch (error) {
    // Return an error message if the sign-in fails
    res.status(401).json({ error: error.message });
  }
});


app.get('/profile', async (req, res) => {
  try {
    // Verify token
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Ananya");
    
    // Get the requested budget for the authenticated user
    const profile = await User.findById(decoded.userId);;

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
   
    res.status(401).json({ error: 'Unauthorized' });
  }
});


app.post('/budgets/:month/:year/expenses',  (req, res) => {

  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "Ananya");

  const { month, year } = req.params;
  const { name, amount, category } = req.body;
  
  // Find the user's budget for the given month and year
  User.findOne({ _id: decoded.userId, 'budgets.month': month, 'budgets.year': year })
    .then(user => {
 
      if (!user) {
        return res.status(404).json({ message: 'Budget not found for the given month and year' });
      }
      
      // Find the budget object within the user object
      const budget = user.budgets.find(b => b.month == month && b.year == year);

      
      
      // Add the new expense to the budget object
      budget.expenses.push({ name, amount, category });
      console.log(budget);
      // Save the updated user object
      user.save().then(() => {
        console.log(user);
          res.status(200).json({ message: 'Expense added successfully' });
        })
        .catch(error => {
          
          res.status(500).json({ message: 'Internal server error' });
        });
    })
    .catch(error => {
      res.status(500).json({ message: 'Internal server error' });
    });
});


app.post('/budgets', async (req, res) => {

  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "Ananya");

  try {
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const { month, year, balance } = req.body;

    const budget = {
      month: month,
      year: year,
      balance: balance,
  
    };

    user.budgets.push(budget);

     await user.save();

    res.status(201).send(budget);
  } catch (error) {
 
    res.status(500).send({ message: 'Server error' });
  }
});

app.delete('/budgets/:budgetIndex/expenses/:expenseIndex',  async (req, res) => {
 
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "Ananya");

  try {
    const userId = decoded.userId;
    const budgetIndex = req.params.budgetIndex;
    const expenseIndex = req.params.expenseIndex;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const budget = user.budgets[budgetIndex];
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    
    const expense = budget.expenses[expenseIndex];
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    
    if (user._id.toString() !== userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    budget.expenses.splice(expenseIndex, 1);
    await user.save();
    
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/budget/:index',  async (req, res) => {


  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "Ananya");


  const userId = decoded.userId;
  const index = req.params.index;

  const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const budget = user.budgets;
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    
    if (user._id.toString() !== userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    budget.splice(index, 1);
    await user.save();
    
    res.status(200).json({ message: 'Budget deleted successfully' });


});

const PORT = process.env.PORT || 4000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


module.exports = app;