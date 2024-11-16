import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() postCardData: any;
  postData: any;
  imageUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.postData = this.postCardData;
    // Sanitize the URL to mark it as trusted
    console.log(this.postData);
    
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(this.postData.data.postImgPath);

    this.router.params.subscribe(val => {
      console.log(val);
      
    })
    
  }
}
