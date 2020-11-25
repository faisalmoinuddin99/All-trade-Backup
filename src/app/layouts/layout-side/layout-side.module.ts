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
import { PhoneRegPageComponent } from 'src/app/pages/register/phone-reg-page/phone-reg-page.component';
import { RegisterPageComponent } from 'src/app/pages/register/register-page/register-page.component';
import { UploadDocComponent } from 'src/app/pages/register/upload-doc/upload-doc.component';





@NgModule({
  declarations: [LayoutSideComponent,HomeComponent, ReportDistrictComponent,
    ReportCropComponent, PhoneRegPageComponent, RegisterPageComponent,
     UploadDocComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule,
    ChartsModule,
    
  ]
})
export class LayoutSideModule { }
