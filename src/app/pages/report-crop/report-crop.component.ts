import { Component, OnInit } from '@angular/core';
import { _getOptionScrollPosition } from '@angular/material/core';
import { ReportsServiceService } from 'src/app/shared/services/reports-service.service';

@Component({
  selector: 'app-report-crop',
  templateUrl: './report-crop.component.html',
  styleUrls: ['./report-crop.component.css']
})
export class ReportCropComponent implements OnInit {

  Crops : any;
  

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor(private _reportService: ReportsServiceService) { }

  ngOnInit(): void {
    this.GetCrops();
  }
  
  GetCrops() {
    var crops = this._reportService.GetCrops();
    crops.subscribe((res: any) => {
    //   this.technologyData = res;
      console.log(res);
      this.Crops = res;
    });
  }



  selectCropChange(event: any){
    let selectedType = event.target["options"];
    let selectedIndexType = selectedType.selectedIndex;
  }
}
