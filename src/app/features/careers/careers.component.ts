import { Component, inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { CareerGetResponse } from './models/careerGetResponse';
import { EndPoints } from '../../core/constants/endpoints';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NavigationComponent, RouterLink],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class CareersComponent implements OnInit {
  httpService = inject(HttpService);
  career$!: Observable<CareerGetResponse>;
  ngOnInit(): void {
    this.career$ = this.httpService.get<CareerGetResponse>(EndPoints.CAREER);
  }
}
