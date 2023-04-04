import { Component, OnInit } from '@angular/core';
import { ConfigureService } from '../configure.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  name = 'Angular';
  phoneNo:any;
  otpToVerify= '';
  otpGet:Boolean = false;
  sucMsg:string = '';
  errMsg:string = '';
  otpSession:any = {}
  httpOptions:any = {
    headers:new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    ),
    params:new HttpParams()
  };
  constructor(private fb: FormBuilder,public router: Router,private http:HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  getOtp(){
    console.log("phone no", this.phoneNo)
    this.sucMsg = '';
    this.errMsg = '';
    if(typeof this.phoneNo == "string" &&  this.phoneNo.length == 10){
    let url = 'https://2factor.in/API/V1/6406ae56-09f1-11e9-a895-0200cd936042/SMS/8086023614/AUTOGEN/viney';
   
    this.http.get(url)
      .subscribe((res:any) =>{
        console.log("get res", res)
        if(res.Status == "Success"){
          this.otpGet = true;
          this.otpSession = res
        }
      })
    }else{
      alert("Successfully verified.")
    }
  }
 
  onSubmit() {
    this.router.navigate(['/input']);
  }
}
