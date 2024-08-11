import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tahalof-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() textColor: string = 'white' || '#034773';
  @Input() nav1: string = 'Home';
  @Input() nav2!: string;
  @Input() nav3: string = '';
}
