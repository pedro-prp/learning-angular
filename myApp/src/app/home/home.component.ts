import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HouseLocation } from '../house-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  houseLocations: HouseLocation = {
    id: 1,
    name: 'House Joseph',
    city: 'City 1',
    state: 'State 1',
    photo: 'photo1.jpg',
    availableUnits: 3,
    wifi: true,
    laundry: true,
  };
}
