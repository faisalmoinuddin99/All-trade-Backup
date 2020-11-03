import { Component, Inject, OnInit } from '@angular/core';
import {Login }  from '../../Model/Login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  isTrue:boolean = false;
  loginErrorFlag:boolean = false;
  loginError: any;
  loginErrorMsg: any;
  token:string;
  sessiontoken: any[];
  
    
  constructor(private authservice:AuthServiceService,private router: Router,public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.loginform = new FormGroup({
      UserName : new FormControl('',[Validators.required]),
      Password : new FormControl('',[Validators.required]),
    })
  }


  IsValidLogin(){
    console.log("Entered Login")
    // if(this.loginform.valid){
    //   this.authservice.login(this.loginform.value).subscribe(result=>{

    //       console.log("Response received")
    //       console.log(result.status);
    //       alert(result.token);
       
    //   })
    // }
    var observable = this.authservice.login(this.loginform.value)
    observable.subscribe((res: any) => {
         if (res.status == "1" && res.token != null) {
           console.log("success", JSON.stringify(res));
           console.log("success", res.status);
           this.isTrue = true;
           sessionStorage.setItem("token", res.token);        
           this.router.navigate(['\home']);
           //alert("Valid User");
           
      }
      else
      {
        console.log("failure", JSON.stringify(res));
        alert("Incorrect UserName and Password");
      }
    },
    (error: any) => {
      console.log("failure");
      this.loginError = "Please Enter Valid Username And/Or Password Or Contact Your Administrator.";
      this.loginErrorFlag = true;
      //alert("Incorrect UserName and Password");
  }
    );

  }
}