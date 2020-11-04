import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/shared/services/main-service.service';
import { ImageMapComponent } from '../image-map/image-map.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  crops :any;
  firstrowcrops :any;
  secondrowcrops :any;
  thirdrowcrops :any;
  districts :any;
  districts_farmers : any;

 
  // districts = [{name:'Nashik',totalarea:'1000',areasown:'500',totalfarmers:100,sowingfarmers:50},
  // {name:'Thane',totalarea:'110',areasown:'90',totalfarmers:50,sowingfarmers:20},
  // {name:'Ratnagiri',totalarea:'105',areasown:'75',totalfarmers:10,sowingfarmers:5},
  // {name:'Pune',totalarea:'20',areasown:'15',totalfarmers:1,sowingfarmers:1},
  // ];
 
  imageObject: Array<object> = [{
    image: 'assets/img/banner-bg.jpg',
    thumbImage: 'assets/img/farmayu-logo.png',
    alt: 'alt of image',
    title: 'title of image'
}, {
    image: 'assets/img/field_grass_landscape_farm.jpg', // Support base64 image
    thumbImage: 'assets/img/field_grass_landscape_farm.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}
];

  constructor(private dialog: MatDialog,private _mainService: MainServiceService,private router: Router) { }

  ngOnInit(): void {

  this.GetCrops();
  this.GetTopAreaSown();
  this.GetTopFarmers();
   
    this.setCarouselHeight('#carousel-example');
    
    var test = 

    $('area').each(function(){
      var txt=$(this).data('name');
      console.log( 'txt-' + txt);
      var left= $(this).data('left') ;
      var top=$(this).data('top') - 50 ;
      console.log('left-' + left);
      console.log('top-' + top);
      
      // var $span=$('<span class="text-block">'+txt+'</span>');        

      // $span.css({top: top+'px', left: left+'px', position:'absolute', width:'100px', height:'50px' ,background: 'rgba(0, 0, 0, 0.5)',
      // color: 'rgba(243, 239, 239, 1)',"text-align":'center',"padding-top": '5px'});
      // $span.appendTo('#map');
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

  GetCrops() {
    var crops = this._mainService.GetTopCrops();
    crops.subscribe((res: any) => {
    //   this.technologyData = res;
      
      this.crops = res;
      console.log("CROPS:" + crops);
   this.firstrowcrops = this.crops.slice(0,5);
         
   this.secondrowcrops      = this.crops.slice(5,10);
    this.thirdrowcrops = this.crops.slice(10,15);
    console.log("firstrowcrops:" + this.firstrowcrops);
    console.log("secondrowcrops:" + this.secondrowcrops);
    console.log("thirdrowcrops:" + this.thirdrowcrops);

    });
  }

  GetTopAreaSown() {
    var districts = this._mainService.GetTopAreaSown();
    districts.subscribe((res: any) => {
      
    this.districts = res;
      console.log(this.districts);

    });
  }

  GetTopFarmers() {
    var districts = this._mainService.GetTopFarmers();
    districts.subscribe((res: any) => {
      
    this.districts_farmers = res;
      console.log(this.districts_farmers);

    });
  }

   setCarouselHeight(id)
  {
      // set the slide's height
      $(id+' .carousel-content').each(function()
      {
          $(this).css('height','150px');
      });
  }

  ShowLoginPopup(){
    console.log("Reached Showloginpopup");
  //this.router.navigate(['\login']);
  const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    //dialogConfig.height = "40%";
    dialogConfig.data = name;
    this.dialog.open(LoginComponent,dialogConfig);
  }
}
