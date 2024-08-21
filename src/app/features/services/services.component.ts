import { Component, inject } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { ServiceGetResponse } from './models/service-get-response';
import { EndPoints } from '../../core/constants/endpoints';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { ImageComponent } from '../../shared/components/image/image.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ImageComponent, RouterLink, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  httpService = inject(HttpService);
  services$!: Observable<ServiceGetResponse>;
  ngOnInit(): void {
    this.services$ = this.httpService.get(EndPoints.SERVICE);
  }
}
