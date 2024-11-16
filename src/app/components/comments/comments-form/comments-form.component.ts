import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments-form.component.html',
  styleUrl: './comments-form.component.css'
})
export class CommentsFormComponent implements OnInit{


  ngOnInit(): void {
    
  }

  

}
