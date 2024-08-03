import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { FooterGetResponse } from './models/FooterGetResponse';
import { EndPoints } from '../../constants/endpoints';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  httpservice = inject(HttpService);
  footer$!: Observable<FooterGetResponse>;
  ngOnInit(): void {
    this.footer$ = this.httpservice.get<FooterGetResponse>(EndPoints.FOOTER);
  }
}
