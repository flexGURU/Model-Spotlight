import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostService } from '../../../services/post.service';
import { CommonModule } from '@angular/common';
import { CategoryNavbarComponent } from '../../layouts/category-navbar/category-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, CommonModule, CategoryNavbarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  postData : Array<any>;

  constructor( private postService: PostService){}

  ngOnInit(): void {
    this.postService.loadData().subscribe( val => {
      // console.log(val);
      this.postData = val;
      
    })
  }

}
