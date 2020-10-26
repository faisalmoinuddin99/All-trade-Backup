import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.css']
})
export class ImageMapComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['RICE', 'WHEAT', 'ONION', 'POTATO', 'TOMATO'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: this.data},
   
  ];

  constructor( public dialogRef: MatDialogRef<ImageMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log('Received data at imagecomponent:' + data)
     }

  ngOnInit(): void {

  }


}
