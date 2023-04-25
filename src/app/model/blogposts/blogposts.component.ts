import { Component, OnInit } from '@angular/core';
import { user } from '../user/user.component';
import { prof } from '../encadrant/encadrant.component';
import { Field } from '../field/field.component';
import { entreprise } from '../partner/partner.component';
export class blogpost {
  id: number=0;
  student: user = new user;
  encadrant: prof = new prof;
  date_de_debut: string="";
  date_de_fin: string="";
  feedback: string="";
  cat: Field = new Field;
  entrep: entreprise = new entreprise;
}
@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
