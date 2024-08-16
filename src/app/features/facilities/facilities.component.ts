import { Component } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { FacilitiesGetResponse } from './models/facilities-get-response';
import { EndPoints } from '../../core/constants/endpoints';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { ImageComponent } from '../../shared/components/image/image.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ImageComponent, RouterLink],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss',
})
export class FacilitiesComponent {
  constructor(private httpService: HttpService) {}
  facilities$!: Observable<FacilitiesGetResponse>;
  ngOnInit(): void {
    this.facilities$ = this.httpService.get<FacilitiesGetResponse>(
      EndPoints.HOSPITAL
    );
  }
}
