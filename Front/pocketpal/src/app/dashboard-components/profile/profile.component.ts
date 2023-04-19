import { Component } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private serveice: AppserviceService){}

  editProfile(Fname: string, Lname: string, email: string, password: string){
    this.serveice.editProfile(this.serveice.userData.tooken, Fname, Lname, email, password)
  }

}
