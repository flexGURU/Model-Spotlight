import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionComponent } from "../../pages/subscription/subscription.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, SubscriptionComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
