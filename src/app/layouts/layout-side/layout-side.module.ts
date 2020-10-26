import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSideComponent } from './layout-side.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReportDistrictComponent } from 'src/app/pages/report-district/report-district.component';
import { ReportCropComponent } from 'src/app/pages/report-crop/report-crop.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ChartsModule } from 'ng2-charts';
import * as $ from "jquery";



@NgModule({
  declarations: [LayoutSideComponent,HomeComponent, ReportDistrictComponent,ReportCropComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule,
    ChartsModule,
    
  ]
})
export class LayoutSideModule { }
