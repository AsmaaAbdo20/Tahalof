import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpService } from '../../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { HospitalGetResponse } from '../models/facilities-get-response';
import { EndPoints } from '../../../core/constants/endpoints';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';
import { ImageComponent } from '../../../shared/components/image/image.component';

@Component({
  selector: 'tahalof-facilities-details',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ImageComponent],
  templateUrl: './facilities-details.component.html',
  styleUrl: './facilities-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FacilitiesDetailsComponent {
  hospitalDetails$!: Observable<HospitalGetResponse>;
  CurrId: string | null = null;

  constructor(
    private httpService: HttpService,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.CurrId = this.activatedRouter.snapshot.paramMap.get('uuid');
    console.log(this.CurrId);
    this.hospitalDetails$ = this.httpService.get<HospitalGetResponse>(
      EndPoints.HOSPITAL + this.CurrId
    );
  }
}
