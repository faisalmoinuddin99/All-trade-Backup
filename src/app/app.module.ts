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
import { AboutComponent } from './pages/about/about.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ImageMapComponent } from './pages/image-map/image-map.component';
import { ChartsModule } from 'ng2-charts';
import * as $ from "jquery";


@NgModule({
  declarations: [
    AppComponent,LoginComponent, MainComponent, AboutComponent,ImageMapComponent

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
    MatMenuModule,
    MatListModule,
    NgImageSliderModule,
    MatDialogModule,
    ChartsModule,
    MatIconModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
