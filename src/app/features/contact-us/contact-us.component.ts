import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { ContactusGetResponse } from './models/contactusGetResponse';
import { EndPoints } from '../../core/constants/endpoints';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../shared/components/base/base.component';
import { Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { environment } from '../../environments/environment';
import { CustomValidatorsService } from '../../core/services/custom-validators/custom-validators.service';
import { formsModule } from '../../shared/components/base/form-modules';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    ...formsModule,
    NavigationComponent,
    CommonModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent extends BaseComponent implements OnInit {
  http = inject(HttpService);
  contactUs$!: Observable<ContactusGetResponse>;
  basUrl = environment.baseUrl;
  ngOnInit(): void {
    this.contactUs$ = this.http.get<ContactusGetResponse>(EndPoints.CONTACTUS);
    this.loadForm({
      name: ['', [Validators.required, CustomValidatorsService.isAlphabet]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, CustomValidatorsService.isPhone]],
      message: ['', [Validators.required]],
      subject: ['', [Validators.required]],
    });
  }
  getImage(imgsrc: string) {
    return `${this.basUrl}${imgsrc}`;
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.http.post(EndPoints.CONTACTUS, this.form.value).subscribe({
      next: () => {
        this.form.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
