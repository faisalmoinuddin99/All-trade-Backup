import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutSideModule } from './layouts/layout-side/layout-side.module';

import { MainComponent } from './pages/main/main.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { ImageMapComponent } from './pages/image-map/image-map.component';
import { ChartsModule } from 'ng2-charts';
import { LayoutFullModule } from './layouts/layout-full/layout-full.module';

import { AllTradesComponent } from './pages/all-trades/all-trades.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PhoneRegPageComponent } from './pages/register/phone-reg-page/phone-reg-page.component';
import { RegisterPageComponent } from './pages/register/register-page/register-page.component';
import { UploadDocComponent } from './pages/register/upload-doc/upload-doc.component';
import { StructureKeyPersonnelComponent } from './pages/structure-key-personnel/structure-key-personnel.component';
import { InvestorRelationComponent } from './pages/investor-relation/investor-relation.component';
import { CommodityPurchaseComponent } from './pages/commodity-purchase/commodity-purchase.component';
import { CropForecastingComponent } from './pages/crop-forecasting/crop-forecasting.component';
import { CropInsuranceComponent } from './pages/crop-insurance/crop-insurance.component';




@NgModule({
  declarations: [
    AppComponent,LoginComponent, MainComponent,ImageMapComponent,AllTradesComponent,    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutSideModule,
    LayoutFullModule,
    MatMenuModule,
    MatListModule,
    NgImageSliderModule,
    MatDialogModule,
    ChartsModule,
    MatIconModule,
    MatCheckboxModule
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
