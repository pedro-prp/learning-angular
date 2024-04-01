import { Component, Input } from '@angular/core';
import { HouseLocation } from '../house-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() houseLocation!: HouseLocation;
}
