import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @Input() chartData: any;
  @Input() xAxisLabel = "Products";
  @Input() yAxisLabel = "Sales";
  // chartData = [
  //   {
  //     name: 'Germany',
  //     value: 40632,
  //   },
  //   {
  //     name: 'United States',
  //     value: 49737,
  //   },
  //   {
  //     name: 'France',
  //     value: 36745,
  //   },
  //   {
  //     name: 'United Kingdom',
  //     value: 36240,
  //   },
  //   {
  //     name: 'Spain',
  //     value: 33000,
  //   },
  //   {
  //     name: 'Italy',
  //     value: 35800,
  //   },
  // ];
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


}
