import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './model/login/login.component';
import { HomeComponent } from './model/home/home.component';
import { SignupComponent } from './model/signup/signup.component';
import { PartnerComponent } from './model/partner/partner.component';
import { AddEntComponent } from './model/add-ent/add-ent.component';
import { AddEncComponent } from './model/add-enc/add-enc.component';
import { EntrpriseComponent } from './model/entrprise/entrprise.component';
import { EncadrantComponent } from './model/encadrant/encadrant.component';
import { FieldComponent } from './model/field/field.component';
import { PfeComponent } from './model/pfe/pfe.component';

import { TabbordComponent } from './model/tabbord/tabbord.component';


const routes: Routes = [{path :"", component :HomeComponent},
{path :"home", component :HomeComponent},{path:"addenc",component:AddEncComponent},{path:"addent",component:AddEntComponent},
  {path : "login" , component :LoginComponent},{path:"tabbord",component:TabbordComponent},{path :"pfe",component:PfeComponent},{path:"field",component:FieldComponent},{path:"encadrant",component:EncadrantComponent},{path:"entreprise",component:EntrpriseComponent},{path:"signup",component :SignupComponent},{path:"partner" , component:PartnerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
