import { Component, OnInit } from '@angular/core';
import { blogpost } from '../blogposts/blogposts.component';
import { BlogpostService } from 'src/app/service/blogpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabbord',
  templateUrl: './tabbord.component.html',
  styleUrls: ['./tabbord.component.css']
})
export class TabbordComponent implements OnInit {

  blogposts: blogpost[] = [];
  constructor(private blogpostService: BlogpostService,private router :Router) { }

  ngOnInit(): void { this.blogpostService.getAllblogpost().subscribe(
    blogposts => this.blogposts = blogposts
  );
  }
  redirectToAutreComposant(): void {
    // Utilisez la méthode navigate() du Router pour naviguer vers l'autre composant
    this.router.navigate(['/addent']); // Remplacez avec le chemin vers votre autre composant
  }

}
