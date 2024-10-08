import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CompanyComponent } from './features/company/company.component';
import { ServicesComponent } from './features/services/services.component';
import { FacilitiesComponent } from './features/facilities/facilities.component';
import { NewsComponent } from './features/news/news.component';
import { CareersComponent } from './features/careers/careers.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { JobDescriptionComponent } from './features/careers/job-description/job-description.component';
import { NewsDetailsComponent } from './features/news/news-details/news-details.component';
import { FacilitiesDetailsComponent } from './features/facilities/facilities-details/facilities-details.component';
import { ServiceDetailsComponent } from './features/services/service-details/service-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: CompanyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'hospital', component: FacilitiesComponent },
  { path: 'hospital/:uuid', component: FacilitiesDetailsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'careers/:jobId', component: JobDescriptionComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
