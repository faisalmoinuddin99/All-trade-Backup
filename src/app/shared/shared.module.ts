import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent,],
  imports: [
    CommonModule,FlexLayoutModule,RouterModule
  ],
  exports: [HeaderComponent,FooterComponent,SidebarComponent]
})
export class SharedModule { }
