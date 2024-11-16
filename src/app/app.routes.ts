import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SinglePostComponent } from './components/pages/single-post/single-post.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path: 'post/:id', component: SinglePostComponent},
    {path: 'category/:category/:id', component: SingleCategoryComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'terms&conditions', component: TermsConditionsComponent}


];
