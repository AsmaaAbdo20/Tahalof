import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CompanyComponent } from './features/company/company.component';
import { ServicesComponent } from './features/services/services.component';
import { FacilitiesComponent } from './features/facilities/facilities.component';
import { NewsComponent } from './features/news/news.component';
import { CareersComponent } from './features/careers/careers.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'facilities',
    component: FacilitiesComponent,
  },
  { path: 'news', component: NewsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
