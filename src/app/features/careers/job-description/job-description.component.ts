import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { EndPoints } from '../../../core/constants/endpoints';
import { CareerDetailsGetResponse } from '../models/careerGetResponse';
import { HttpService } from '../../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { formsModule } from '../../../shared/components/base/form-modules';
import { CustomValidatorsService } from '../../../core/services/custom-validators/custom-validators.service';

@Component({
  selector: 'tahalof-job-description',
  standalone: true,
  imports: [NavigationComponent, CommonModule, ButtonComponent, ...formsModule],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.scss',
})
export class JobDescriptionComponent extends BaseComponent implements OnInit {
  httpService = inject(HttpService);
  careerDetails$!: Observable<CareerDetailsGetResponse>;
  currJobId: string | null = null;
  selectedFile: File | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
    this.currJobId = this.activatedRoute.snapshot.paramMap.get('jobId');
    
  }

  ngOnInit(): void {
    this.careerDetails$ = this.httpService.get<CareerDetailsGetResponse>(
      EndPoints.CAREER + this.currJobId
    );

    this.loadForm({
      name: ['', [Validators.required, CustomValidatorsService.isAlphabet]],
      email: ['', [Validators.required, CustomValidatorsService.isEmail]],
      phone: ['', [Validators.required, CustomValidatorsService.isPhone]],
      country: ['', [Validators.required]],
      cv: ['', [Validators.required]],
      cv_name: ['', [Validators.required]],
    });
  }
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        var srcData = fileLoadedEvent.target!.result; // <--- data: base64
        if (srcData) {
          const newImage = document.createElement('img');
          newImage.src = srcData as string; // Cast srcData to string
        }
      };
      if (this.selectedFile) {
        fileReader.readAsDataURL(this.selectedFile);
      }
    }
  }
  override onSubmit(): void {
    console.log(this.selectedFile);
    console.log(this.form.value);
    if (this.form.invalid) return;
    this.httpService.post(EndPoints.CAREER, this.form.value).subscribe({
      next: () => {
        this.form.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
