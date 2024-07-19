import { Component } from '@angular/core';
import { CarComponent } from "../car/car.component";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

}
