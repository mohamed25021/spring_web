import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: any[] = [];
  count=0 ;
  searchTerm: any;
  selectedOption: any  = "";
  buttonClicked : any = true ;
  buttonClicked2 : any=true ;
  showCards : any ; 
  constructor() {  this.cards = [];}
  myList: any[] = [{ title: 'Item 1', description: 'Description of item 1', nometudiant:'aaaa' , id:'1111' , entreprise:'ghjk' },
  { title: 'Item 2', description: 'Description of item 2', nometudiant:'aaaa' , id:'1111' , entreprise:'ghjk' },
  { title: 'Item 2', description: 'Description of item 2', nometudiant:'aaaa' , id:'1111' , entreprise:'ghjk' },
  { title: 'Item 3', description: 'Description of item 3', nometudiant:'aaaa' , id:'1111' , entreprise:'ghjk' },
  { title: 'Item 3', description: 'Description of item 3', nometudiant:'aaaa' , id:'1111' , entreprise:'ghjk' },];
  onClick() {
    this.count++;
  }
  onClick2() {
   this.buttonClicked = false;
  }
  onClick4() {
    this.buttonClicked = true;
   }
  onClick3() {
    this.buttonClicked2 = false;
   }
   onClick5() {
    this.buttonClicked2 = true;
   }
  toggleCards() {
    this.showCards = !this.showCards;
  }

  search() {
    const results = this.myList.filter(myList => myList.toLowerCase().includes(this.searchTerm.toLowerCase()));
    console.log(results); 
  }
  shareCard() {
    const shareData = {
      title: 'Card partage',
      text: 'Voici mon contenu partageable : ' ,
      url: 'https://mon-url.com'
    };
  


    if (navigator.share) {
      
      navigator.share(shareData)
        .then(() => console.log('Partage effectué avec succès !'))
        .catch((error) => console.log('Erreur lors du partage :', error));
    } else {
      console.log('Le partage n\'est pas supporté sur ce navigateur.');
    }
  }
  ngOnInit(): void {
    
  }

}




  
