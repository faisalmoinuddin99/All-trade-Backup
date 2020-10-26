import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutSideComponent } from './layouts/layout-side/layout-side.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageMapComponent } from './pages/image-map/image-map.component';
//import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ReportCropComponent } from './pages/report-crop/report-crop.component';
import { ReportDistrictComponent } from './pages/report-district/report-district.component';

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
    path: 'about',
    component: AboutComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LoginComponent,
    //   },
    // ],
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
