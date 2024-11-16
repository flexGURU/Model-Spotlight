import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';

import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
      provideAnimations(),
    importProvidersFrom( 
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,


    ), provideAnimationsAsync(), provideAnimationsAsync()

  ]
};
