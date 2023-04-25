import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PfeService } from 'src/app/service/pfe.service';
export class PFE {
  id: number=0;
  nometudiant: string="";
  date: string="";
  nomentreprise: string="";
  liengithub: string="";
}
@Component({
  selector: 'app-pfe',
  templateUrl: './pfe.component.html',
  styleUrls: ['./pfe.component.css']
})
export class PfeComponent implements OnInit {

   
  PFEs: PFE[] = [];
  constructor(private pfeService: PfeService,private router :Router) { }

  ngOnInit(): void { this.pfeService.getAllPFE().subscribe(
    PFEs => this.PFEs = PFEs
  
  );
  }
  redirectToAutreComposant(): void {
   
    this.router.navigate(['/']); // Remplacez avec le chemin vers votre autre composant
  }


}
