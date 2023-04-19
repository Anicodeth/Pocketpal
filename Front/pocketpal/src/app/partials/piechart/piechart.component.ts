import { Component } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  chartData = [
    {
      name: 'Germany',
      value: 40632,
    },
    {
      name: 'United States',
      value: 49737,
    },
    {
      name: 'France',
      value: 36745,
    },
    {
      name: 'United Kingdom',
      value: 36240,
    },
    {
      name: 'Spain',
      value: 33000,
    },
    {
      name: 'Italy',
      value: 35800,
    },
  ];
}