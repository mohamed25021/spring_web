import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EncadrantService } from 'src/app/service/encadrant.service';
export class prof{
  name_p :string="";
  email_p :string="";
}
@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.css']
})
export class EncadrantComponent implements OnInit {

  profs: prof[] = [];
  constructor(private encadrantService: EncadrantService,private router :Router) { }

  ngOnInit(): void { this.encadrantService.getAllProfessors().subscribe(
    profs => this.profs = profs
  
  );
  }
  redirectToAutreComposant(): void {
   
    this.router.navigate(['/addenc']); // Remplacez avec le chemin vers votre autre composant
  }

}
