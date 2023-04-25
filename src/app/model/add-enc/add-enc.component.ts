import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EncadrantService } from 'src/app/service/encadrant.service';
import { prof } from '../encadrant/encadrant.component';
@Component({
  selector: 'app-add-enc',
  templateUrl: './add-enc.component.html',
  styleUrls: ['./add-enc.component.css']
})
export class AddEncComponent implements OnInit {
  prof: prof = new prof(); // Remplacez "entreprise" par "Prof"
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private profserv: EncadrantService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.profserv.addProfessor(this.prof).subscribe(
      response => {
        // Gérer la réponse réussie
        console.log('Prof saved successfully', response); // Remplacez "entreprise" par "Prof"
        this.errorMessage = 'Prof saved successfully'; // Remplacez "entreprise" par "Prof"
        this.router.navigate(['/encadrant']);
        this.prof = new prof(); 
      },
      error => {
        // Gérer l'erreur
        console.error('Failed to save user', error);
        this.errorMessage = 'Failed to save user. Please try again.';
      }
    );

 

    }
  }