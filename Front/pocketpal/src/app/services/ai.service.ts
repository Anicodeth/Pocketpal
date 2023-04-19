import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AiService {
  responseData: any;

  constructor(private http: HttpClient) { }

  sendBotRequest(prompt: string) {
    const promptUrl = `https://pocket-pal-api.vercel.app/ai/:${prompt}`;

    this.http.get(promptUrl).subscribe(response => {
      this.responseData = response;
    });
  }

  getBotResponse(): string {
    return this.responseData["aianswer"];
  }
}