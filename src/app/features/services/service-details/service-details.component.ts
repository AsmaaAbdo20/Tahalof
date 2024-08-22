import { Component, inject } from '@angular/core';
import { HttpService } from '../../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { ServiceDetailsGetResponse } from './models/service-details-get-response';
import { EndPoints } from '../../../core/constants/endpoints';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavigationComponent } from "../../../shared/components/navigation/navigation.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'tahalof-service-details',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ImageComponent, ButtonComponent,RouterLink],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.currId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  httpService = inject(HttpService);
  serviceDetails$!: Observable<ServiceDetailsGetResponse>;
  currId: string | null = '';
  ngOnInit(): void {
    this.serviceDetails$ = this.httpService.get(
      EndPoints.SERVICE + this.currId
    );
    console.log(this.currId);
  }
}
