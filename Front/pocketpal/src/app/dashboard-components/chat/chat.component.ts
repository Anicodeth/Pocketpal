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
  value: string = '';

  constructor(
    public chatService: ChatService,
    public aiService: AiService
    ) { }

  ngOnInit() {
  }

  sendMessage() {
    this.aiService.sendBotRequest(this.value);

    this.messages.push(new Message("user", this.value));
    this.messages.push(new Message("bot", this.aiService.getBotResponse()));

    this.value = "";
  }

}