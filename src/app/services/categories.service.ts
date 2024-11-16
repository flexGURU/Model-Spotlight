import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private afs: AngularFirestore) { }


  loadData() {
    return this.afs.collection('categories').snapshotChanges().pipe (
      map(actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
   }
   
  loadCategories(id) {
    console.log("fecthing");
    
    return this.afs.collection('posts', ref => ref.where('category.categoryid', '==', id)).snapshotChanges().pipe (
      map(actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
   }

   
}
