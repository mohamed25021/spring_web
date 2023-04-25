import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/service/entreprise.service';
import { entreprise } from '../partner/partner.component';

@Component({
  selector: 'app-add-ent',
  templateUrl: './add-ent.component.html',
  styleUrls: ['./add-ent.component.css']
})
export class AddEntComponent implements OnInit {
 entreprise : entreprise= new entreprise();
 successMessage: string = '';
  errorMessage: string = '';
  constructor(private partnerserv :EntrepriseService,private router:Router) { }

  
  onSubmit() {
    this.partnerserv.addEntreprise(this.entreprise).subscribe(
      response => {
        // Gérer la réponse réussie
        console.log('entreprise saved successfully', response);
        this.errorMessage = 'entreprise saved successfully';
        this.router.navigate(['/partner']); 
        this.entreprise = new entreprise();
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
