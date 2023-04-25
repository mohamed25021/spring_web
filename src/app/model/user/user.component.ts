import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from 'src/app/service/user-service.service';

export class user {
  name: string ="";
  email : string ="";
 password : string="";
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
   
  constructor(  private http: HttpClient
 ,   private userserv: UserServiceService
) { 
    
   }

  ngOnInit(): void {
  }

  getuser(){
   
  }

}
