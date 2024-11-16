import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor( 
    private afs: AngularFirestore,
    private toastr: ToastrService
  
  ) { }

  addSubscriber(subData) {
    this.afs.collection('subscribers').add(subData).then(() => {
      this.toastr.success(`Email sent to: ${subData.email}`)
      
    })
  }

  checkEmailDuplicates(subEmail){
    return this.afs.collection('subscribers', ref => ref.where('email', '==', subEmail)).get()
  }
}
