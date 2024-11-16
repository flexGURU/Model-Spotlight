import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent implements OnInit {

  categories: Array<any>;

  constructor( private categoryService: CategoriesService){}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe( val => {
      this.categories = val;
      console.log(val);
      
    })
  }

}
