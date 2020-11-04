import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-trades',
  templateUrl: './all-trades.component.html',
  styleUrls: ['./all-trades.component.css']
})
export class AllTradesComponent implements OnInit {
 
  crops = [{name:'Rice'},
  {name:'Wheat'},
  {name:'Barley'},
  {name:'Soyabean'},
  ];

  districts = [{name:'Nashik',totalarea:'1000',areasown:'500',totalfarmers:100,sowingfarmers:50},
  {name:'Thane',totalarea:'110',areasown:'90',totalfarmers:50,sowingfarmers:20},
  {name:'Ratnagiri',totalarea:'105',areasown:'75',totalfarmers:10,sowingfarmers:5},
  {name:'Pune',totalarea:'20',areasown:'15',totalfarmers:1,sowingfarmers:1},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onChange(event, crop) {

    //item.checked = !item.checked;

    //this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

    console.log( event, crop);

}

 
}
