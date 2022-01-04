import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { LoginviewData } from './loginview.model';

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.css']
})
export class LoginviewComponent implements OnInit {

  formValue!:FormGroup
  loginviewModelObj: LoginviewData = new LoginviewData
  allLoginviewData: any;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      CustomerName:[''],
      Projectname:[''],
      GlobalMaster:[''],
      Indicator:[''],
      TechnicalPerson:[''],
      ForecastGenerator:[''],

    })
  }

  addLoginv(){
    this.loginviewModelObj.CustomerName = this.formValue.value.CustomerName;
    this.loginviewModelObj.Projectname = this.formValue.value.Projectname;
    this.loginviewModelObj.GlobalMaster = this.formValue.value.GlobalMaster;
    this.loginviewModelObj.Indicator = this.formValue.value.Indicator;
    this.loginviewModelObj.TechnicalPerson = this.formValue.value.TechnicalPerson;
    this.loginviewModelObj.ForecastGenerator = this.formValue.value.ForecastGenerator;

    this.api.postLoginView(this.loginviewModelObj).subscribe(res=>{
      console.log(res);
      alert("Project Details added successfully");
      this.formValue.reset();
    },
    err=>{
      alert("Something went Wrong!")
    }
    )
  }

  getAllData(){
    this.api.getLoginView().subscribe(res=>{
      this.allLoginviewData = res;
    })
  }



}
