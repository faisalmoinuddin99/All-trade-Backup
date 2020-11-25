import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegistrationSidebarComponent } from './components/registration-sidebar/registration-sidebar.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDialogComponent } from './components/dialog-box/card-dialog/card-dialog/card-dialog.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, RegistrationSidebarComponent, DialogBoxComponent, CardDialogComponent,],
  imports: [
    CommonModule, FlexLayoutModule, RouterModule, FormsModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, DialogBoxComponent, RegistrationSidebarComponent]
})
export class SharedModule { }
