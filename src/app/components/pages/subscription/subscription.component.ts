import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sub } from '../../../models/sub';
import { SubscriberService } from '../../../services/subscriber.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  isEmailerror: boolean = false;
  hasSubscribed: boolean = false;

  constructor( private subService: SubscriberService, private toastr: ToastrService){}


  onSubmit(subscription){

    const subData: Sub = {
      email: subscription.email
    };

    this.subService.checkEmailDuplicates(subData.email).subscribe(val => {
      if(val.empty == true){
    this.subService.addSubscriber(subData);
    this.hasSubscribed = true;
      }else {
        this.isEmailerror = true
      }
    }
    )

    

  }

}
