import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { People } from '../core/models/People';
import { Upload } from '../core/models/Upload';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // line chart
  public lineChartData: ChartDataSets[] = [
    { data: [6556, 5978, 8012, 8199, 5456, 5875, 4110], label: 'Series A' },
    { data: [2821, 4328, 4048, 1459, 8686, 2745, 9220], label: 'Series B' },
    { data: [1850, 4580, 7570, 940, 1000, 2670, 4500], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  // bar chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
 
  public barChartType:ChartType = 'bar';

  public barChartLegend = true;

  public barChartData:ChartDataSets[] = [
    {data: [7765, 8959, 8680, 8121, 5786, 5155, 4240], label: 'Series A'},
    {data: [2788, 4548, 4450, 1789, 8126, 7827, 9990], label: 'Series B'}
  ];

  // data table
  public peoplesDisplayedColumns: string[] = ['id', 'name', 'lastUpdated', 'uploads'];
  public peoplesDataSource: People[] = [
    {id: 1, name: 'Jorge Santos Silva', lastUpdated: new Date(2021, 0, 15, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 10, 8, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 13, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 13, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 13, 10, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 15, 12, 30, 0)}
                                        ]},
    {id: 2, name: 'Maria Rodrigues Silva', lastUpdated: new Date(2021, 0, 25, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 20, 8, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 23, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 23, 10, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 25, 12, 30, 0)}
                                        ]} ,                                       
    {id: 3, name: 'Marcos Silva', lastUpdated: new Date(2021, 0, 14, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 12, 8, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 14, 12, 30, 0)}
                                        ]} ,                                       
    {id: 4, name: 'Ana Pereira Silva', lastUpdated: new Date(2021, 0, 22, 12, 30, 0), uploads: [ 
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 22, 12, 30, 0)}
                                        ]} ,                                       
    {id: 5, name: 'Jorge Rocha Silva', lastUpdated: new Date(2021, 0, 25, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 10, 8, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 20, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 20, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 20, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 20, 10, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 25, 12, 30, 0)}
                                        ]} ,                                       
    {id: 6, name: 'Maria Rocha Matos', lastUpdated: new Date(2021, 0, 15, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 10, 8, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 15, 12, 30, 0)}
                                        ]} ,                                       
    {id: 7, name: 'Pedro Matos da Silva', lastUpdated: new Date(2021, 0, 18, 12, 30, 0), uploads: [ 
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 18, 12, 30, 0)}
                                        ]} ,                                       
    {id: 8, name: 'Felipe Carlos Manoel', lastUpdated: new Date(2021, 0, 23, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 20, 8, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 21, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 21, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 21, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 21, 10, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 23, 12, 30, 0)}
                                        ]} ,                                       
    {id: 9, name: 'Aline Matos Silva', lastUpdated: new Date(2021, 0, 8, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 4, 8, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 5, 10, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 5, 10, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 8, 12, 30, 0)}
                                        ]} ,                                       
    {id: 10, name: 'João Carvalho Silva', lastUpdated: new Date(2021, 0, 10, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 4, 8, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 10, 12, 30, 0)}
                                        ]} ,                                       
    {id: 11, name: 'Bárbara Matos Carvalho', lastUpdated: new Date(2021, 0, 15, 12, 30, 0), uploads: [ 
                                          {id: 1, total: 10, success: 5, fail: 5, awaiting: 0, createdAt: new Date(2021, 0, 10, 8, 30, 0)},
                                          {id: 2, total: 10, success: 7, fail: 3, awaiting: 0, createdAt: new Date(2021, 0, 13, 10, 30, 0)},
                                          {id: 3, total: 10, success: 8, fail: 0, awaiting: 2, createdAt: new Date(2021, 0, 15, 12, 30, 0)}
                                        ]}                                      
  ]

}
