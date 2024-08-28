import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { AboutUsGetResponse } from './models/about-us-get-response';
import { EndPoints } from '../../core/constants/endpoints';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ImageComponent } from '../../shared/components/image/image.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavigationComponent,
    ButtonComponent,
    ImageComponent,MatTabsModule
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  httpService = inject(HttpService);
  companies$!: Observable<AboutUsGetResponse>;
  ngOnInit(): void {
    this.companies$ = this.httpService.get(EndPoints.ABOUTUS);
  }
}
