import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() backgroundColor: string = 'white' || '#034773';
  @Input() textColor:string= '#034773'||'white' ;
}
