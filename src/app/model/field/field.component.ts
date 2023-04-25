import { Component, OnInit } from '@angular/core';
import { user } from '../user/user.component';
import { prof } from '../encadrant/encadrant.component';
import { blogpost } from '../blogposts/blogposts.component';
import { FieldService } from 'src/app/service/field.service';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
export class Field {
  id_field: number=0;
  nom_field: string="";
  blogposts: blogpost[]=[]; // Utiliser le type équivalent pour la liste
}
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  
  fields: Field[] = [];
  constructor(private fieldService: FieldService,private router :Router) { }

  ngOnInit(): void { this.fieldService.getAllfield().subscribe(
    fields => this.fields = fields
  
  );
  }
  redirectToAutreComposant(): void {
   
    this.router.navigate(['/']); // Remplacez avec le chemin vers votre autre composant
  }

}
