import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
   { path:'home', component: HomeComponent  },
   { path:'', redirectTo:"/home", pathMatch:'full'  },
   { path: 'about/:id', component: AboutComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'feature1', 
     loadComponent: () => import('./feature1/feature1.component').then(m => m.Feature1Component )
   }
];
