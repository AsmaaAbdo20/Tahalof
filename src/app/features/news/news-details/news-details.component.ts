import { Component, inject } from '@angular/core';
import { HttpService } from '../../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { NewsDetailsGetResponse } from '../models/news-get-response';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EndPoints } from '../../../core/constants/endpoints';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';
import { ImageComponent } from '../../../shared/components/image/image.component';

@Component({
  selector: 'tahalof-news-details',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ImageComponent],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss',
})
export class NewsDetailsComponent {
  httpService = inject(HttpService);
  newsDetails$!: Observable<NewsDetailsGetResponse>;

  currId: string | null = null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.currId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.currId);
  }
  ngOnInit(): void {
    this.newsDetails$ = this.httpService.get<NewsDetailsGetResponse>(
      EndPoints.NEWS + this.currId
    );
  }
}
