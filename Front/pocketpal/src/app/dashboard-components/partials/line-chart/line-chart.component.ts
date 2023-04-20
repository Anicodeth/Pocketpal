import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() chartData: any;
  @Input() xAxisLabel: any;
  @Input() yAxisLabel: any;
  
  // xAxisLabel = 'Month';
  // yAxisLabel = 'Sales';
  
  // chartData = [
  //   {
  //     name: 'Series 1',
  //     series: [
  //       {
  //         name: 'Jan',
  //         value: 10
  //       },
  //       {
  //         name: 'Feb',
  //         value: 20
  //       },
  //       {
  //         name: 'Mar',
  //         value: 15
  //       },
  //       {
  //         name: 'Apr',
  //         value: 30
  //       },
  //       {
  //         name: 'May',
  //         value: 25
  //       },
  //       {
  //         name: 'Jun',
  //         value: 40
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Series 2',
  //     series: [
  //       {
  //         name: 'Jan',
  //         value: 5
  //       },
  //       {
  //         name: 'Feb',
  //         value: 15
  //       },
  //       {
  //         name: 'Mar',
  //         value: 20
  //       },
  //       {
  //         name: 'Apr',
  //         value: 10
  //       },
  //       {
  //         name: 'May',
  //         value: 35
  //       },
  //       {
  //         name: 'Jun',
  //         value: 30
  //       }
  //     ]
  //   }
  // ];

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };

  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;


  curve = 'linear';

  animations = true;

  // view: [number, number] = [700, 400];
}
