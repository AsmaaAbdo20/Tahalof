import { Component, inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { NewsGetResponse } from './models/news-get-response';
import { EndPoints } from '../../core/constants/endpoints';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../shared/components/image/image.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule,
    ImageComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class NewsComponent implements OnInit {
  http = inject(HttpService);
  news$!: Observable<NewsGetResponse>;
  ngOnInit(): void {
    this.news$ = this.http.get<NewsGetResponse>(EndPoints.NEWS);
  }
  log(id: string) {
    console.log(id);
  }
}
