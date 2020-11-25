import { Component, OnInit } from '@angular/core';
import { Inject, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";;
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  bid = { quantity: '', price: '' };
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
