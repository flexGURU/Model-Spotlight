import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PostCardComponent } from './components/layouts/post-card/post-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostCardComponent,
    HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
