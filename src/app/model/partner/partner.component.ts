import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../../service/entreprise.service';
import {MatCardModule} from '@angular/material/card';

import { MatCardHeader } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { Router } from '@angular/router';

export class entreprise{
  
  nom_entre :string="";
  mail :string="";
  site_web :string="";



}
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
 entreprises: entreprise[] = [];
  constructor(private entrepriseService: EntrepriseService,private router :Router) { }

  ngOnInit(): void { this.entrepriseService.getAllEntreprise().subscribe(
    entreprises => this.entreprises = entreprises
  );
  }
  redirectToAutreComposant(): void {
    // Utilisez la méthode navigate() du Router pour naviguer vers l'autre composant
    this.router.navigate(['/addent']); // Remplacez avec le chemin vers votre autre composant
  }

}
