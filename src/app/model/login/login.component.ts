import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionLoginService } from 'src/app/service/session-login.service';
import { user } from '../user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string="";
  user: user = new user();
  errorMessage: string = '';


  constructor(private sessionLogin : SessionLoginService ,private router:Router) { 
   
 
  

}ngOnInit(): void {
  
}
}
