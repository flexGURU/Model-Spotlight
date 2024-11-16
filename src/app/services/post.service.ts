import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private afs: AngularFirestore) { }

  
  loadData() {
    return this.afs.collection('posts', ref => ref.orderBy('createdAt', 'desc').limit(6)).snapshotChanges().pipe(
      map(actions => {

        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, data}
        })

      })
    )
  }

  loadSinglePost(id){
    return this.afs.collection('posts').doc(id).valueChanges()
  }

  loadSimilarPosts(id){
    return this.afs.collection('posts', ref => ref.where('category.categoryid', '==', id)).snapshotChanges().pipe(
      map(actions => {

        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, data}
        })

      })
    )

  }
}
