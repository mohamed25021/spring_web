import { Component, OnInit } from '@angular/core';
import { user } from '../user/user.component';
import { SessionLoginService } from 'src/app/service/session-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: user = new user();
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private sessionLogin : SessionLoginService ,private router: Router) { }

  onSubmit() {
    this.sessionLogin.saveUser(this.user).subscribe(
      response => {
        // Gérer la réponse réussie
        console.log('User saved successfully', response);
        this.errorMessage = 'User saved successfully';
        this.router.navigate(['/home']); 
        this.user = new user();
      },
      error => {
        // Gérer l'erreur
        console.error('Failed to save user', error);
        this.errorMessage = 'Failed to save user. Please try again.';
      }
    );}

  ngOnInit(): void {
  }

}
