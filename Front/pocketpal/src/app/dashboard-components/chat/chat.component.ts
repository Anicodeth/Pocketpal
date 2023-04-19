import { Component, OnInit } from '@angular/core';
import { AiService } from 'src/app/services/ai.service';
import { ChatService, Message } from 'src/app/services/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  newMessage: string = '';

  constructor(
    public chatService: ChatService,
    public aiService: AiService
  ) { }

  ngOnInit() {
  }

  showTypingIndicator = false;

  sendMessage() {
    if (!this.newMessage.trim()) {
      return;
    }
    
    const message = new Message(this.newMessage, this.newMessage);
    this.aiService.sendBotRequest(this.newMessage);
    this.messages.push(message);
    this.showTypingIndicator = true;

    setTimeout(() => {
      const botMessage = new Message("bot", this.aiService.getBotResponse());
      this.messages.push(botMessage);
      this.showTypingIndicator = false;
    }, 500);

    this.newMessage = '';

  }
}