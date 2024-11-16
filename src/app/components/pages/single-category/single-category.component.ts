import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent implements OnInit {

  categoryData: Array<object>;
  categoryName: any;

  constructor( private router: ActivatedRoute, private catService: CategoriesService) {}

  ngOnInit(): void {
    this.router.params.subscribe(val => {
      this.categoryName = val;      
      this.catService.loadCategories(val['id']).subscribe(res => {
        this.categoryData = res;
        console.log(this.categoryData);
        

      })
      
    })
  }
}
