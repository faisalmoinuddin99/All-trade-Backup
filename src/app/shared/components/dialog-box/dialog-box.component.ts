import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardDialogComponent } from './card-dialog/card-dialog/card-dialog.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(public dialog: MatDialog, private builder: FormBuilder) { }
  ngOnInit(): void {

  }
  openDialog(): void {
    let dialogRef = this.dialog.open(CardDialogComponent, {
      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  // ShowLoginPopup() {
  //   console.log("Reached Showloginpopup");
  //   //this.router.navigate(['\login']);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   // dialogConfig.autoFocus = true;
  //   dialogConfig.width = "40%";
  //   //dialogConfig.height = "40%";
  //   dialogConfig.data = name;
  //   this.dialog.open(LoginComponent, dialogConfig);
  // }

}






