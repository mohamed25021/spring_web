import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './model/user/user.component';
import { BlogpostsComponent } from './model/blogposts/blogposts.component';
import { EntrpriseComponent } from './model/entrprise/entrprise.component';
import { ProfComponent } from './model/prof/prof.component';
import { LoginComponent } from './model/login/login.component';
import { HomeComponent } from './model/home/home.component';
import { SessionLoginService } from './service/session-login.service';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './model/signup/signup.component';
import { PartnerComponent } from './model/partner/partner.component';
import {MatCardModule} from '@angular/material/card';
import { AddEntComponent } from './model/add-ent/add-ent.component';
import { EncadrantComponent } from './model/encadrant/encadrant.component';
import { AddEncComponent } from './model/add-enc/add-enc.component';
import { FieldComponent } from './model/field/field.component';
import { PfeComponent } from './model/pfe/pfe.component';
import { TabbordComponent } from './model/tabbord/tabbord.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BlogpostsComponent,
    EntrpriseComponent,
    ProfComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PartnerComponent,
    AddEntComponent,
    EncadrantComponent,
    AddEncComponent,
    FieldComponent,
    PfeComponent,
    TabbordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,MatCardModule,FormsModule
  ],
  providers: [SessionLoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
