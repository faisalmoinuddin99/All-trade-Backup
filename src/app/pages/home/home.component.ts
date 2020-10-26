import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {  MatDialogConfig } from "@angular/material/dialog";
import { ImageMapComponent } from '../image-map/image-map.component';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private dialog: MatDialog) { }

  
  ngOnInit(): void {
    var test = 
    //this.ReportDistrict()
    $('area').each(function(){
      var txt=$(this).data('name');
      console.log( 'txt-' + txt);
      // var coor=$(this).attr('coords');
      // var coorA=coor.split(',');
      // console.log('coorA-' + coorA);
      var left= $(this).data('left') ;
      var top=$(this).data('top') - 50 ;
      console.log('left-' + left);
      console.log('top-' + top);
      
      var $span=$('<span class="text-block">'+txt+'</span>');        
      // $span.css({top: top+'px', left: left+'px', position:'absolute',  min-width:'70px' ,min-height: '30px' ,
      // text-align: center,
      // padding-top: 5px,
      // background: rgba(0, 0, 0, 0.5),
      // color: rgba(243, 239, 239, 1)});
      $span.css({top: top+'px', left: left+'px', position:'absolute', width:'100px', height:'50px' ,background: 'rgba(0, 0, 0, 0.5)',
      color: 'rgba(243, 239, 239, 1)',"text-align":'center',"padding-top": '5px'});
      $span.appendTo('#map');
  })
  }


  chartdata(name:string) : void{

    console.log('district:' + name)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = name;
    this.dialog.open(ImageMapComponent,dialogConfig);
  }          

}
