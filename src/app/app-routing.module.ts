import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { LayoutSideComponent } from './layouts/layout-side/layout-side.component';
import { AboutComponent } from './pages/about/about.component';
import { AllTradesComponent } from './pages/all-trades/all-trades.component';
import { CommodityPurchaseComponent } from './pages/commodity-purchase/commodity-purchase.component';
import { CropForecastingComponent } from './pages/crop-forecasting/crop-forecasting.component';
import { CropInsuranceComponent } from './pages/crop-insurance/crop-insurance.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageMapComponent } from './pages/image-map/image-map.component';
import { InvestorRelationComponent } from './pages/investor-relation/investor-relation.component';
//import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { PhoneRegPageComponent } from './pages/register/phone-reg-page/phone-reg-page.component';
import { RegisterPageComponent } from './pages/register/register-page/register-page.component';
import { UploadDocComponent } from './pages/register/upload-doc/upload-doc.component';
import { ReportCropComponent } from './pages/report-crop/report-crop.component';
import { ReportDistrictComponent } from './pages/report-district/report-district.component';
import { StructureKeyPersonnelComponent } from './pages/structure-key-personnel/structure-key-personnel.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LoginComponent,
    //   },
    // ],
  },
  {
        path: 'login',
        component: LoginComponent,
  },
  
  {
    path: 'map',
    component: ImageMapComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LoginComponent,
    //   },
    // ],
  },
  {
    path: 'all-trades',
    component: AllTradesComponent,
    
  },
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      
      {
        path: 'about',
        component: AboutComponent,        
      },
      {
        path: 'structure-key-personnel',
        component: StructureKeyPersonnelComponent
      },
      {
        path: 'investor-relation',
        component: InvestorRelationComponent
      },{
        path: 'commodity-purchase',
        component: CommodityPurchaseComponent
      },
      {
        path: 'crop-forecasting',
        component: CropForecastingComponent
      }, {
        path: 'crop-insurance',
        component: CropInsuranceComponent
      }
    ],
  },
  {
    path: '',
    component: LayoutSideComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'report-district',
        component: ReportDistrictComponent,
      },
      {
        path: 'report-crop',
        component: ReportCropComponent,
      }, 
      {
        path:'phone-reg-page',
        component: PhoneRegPageComponent
      },
      {
        path: 'register-page',
        component: RegisterPageComponent
      },
      {
        path: 'upload-doc',
        component: UploadDocComponent
      }
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
