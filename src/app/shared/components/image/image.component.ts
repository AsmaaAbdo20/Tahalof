import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'tahalof-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  basUrl = environment.baseUrl;
  @Input() imgSrc!: string;

  getImage() {
    return `${this.basUrl}${this.imgSrc}`;
  }
}
