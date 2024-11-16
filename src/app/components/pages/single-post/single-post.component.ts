import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentsFormComponent } from '../../comments/comments-form/comments-form.component';
import { CommentsComponent } from "../../comments/comments/comments.component";
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Url } from 'url';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent, CommentsFormComponent, CommentsComponent, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit{

  singlePostData: any;
  postImgPath: SafeUrl;
  similarPostData: Array<object>;

  constructor( 
    private postService: PostService, 
    private router: ActivatedRoute,  
    private sanitizer: DomSanitizer,
    
  ){}


  date: any = '';

  ngOnInit(): void {
    // this.date  = new Date();

    this.router.params.subscribe(val => {
      this.postService.loadSinglePost(val['id']).subscribe(data => {
        this.singlePostData = data;
        // console.log(this.singlePostData.content);
        this.postImgPath = this.sanitizer.bypassSecurityTrustUrl(this.singlePostData.postImgPath);
        this.loadSimilarPosts(this.singlePostData.category.categoryid)
      })
      
    });

   

    
  }

  loadSimilarPosts(id) {
    this.postService.loadSimilarPosts(id).subscribe(post => {
      this.similarPostData = post;
      
    })
  }



}
