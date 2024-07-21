import { Component } from '@angular/core';
import { CarComponent } from "../car/car.component";
import { Car } from '../../Car';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent, FormsModule, CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  setCar: Car = {} as Car;
  isUpdate: boolean = false;
  idCount: number = 1;

  cars: Car[] = [];

  saveCar() {
    if (!this.isUpdate) {
      this.setCar.id = this.idCount;
      this.idCount++;
      this.cars.push(this.setCar);
    }
    this.isUpdate = false;
    this.setCar = {} as Car;
  }
}
