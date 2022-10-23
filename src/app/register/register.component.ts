import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = ""
  pas = ""
  acnumber = ""


  // creating model of the registration form--using group method in formbuilder class it expect a object as controller--value should be an array
  //  connect by using formGroup method and its value as name of model--here it is registerForm
  registerForm = this.fb.group({

    // in string value of that input--inside array is to add rule
    // validator is the class and required is method
    // pattern is to add a pattern rule to input--a-z(can include small letter a-z)
    // here we can use + or * --it is quantifier-- to giv rule of how many count diff is + should have atleast one count *not need any count
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
     acnumber: ['',[Validators.required,Validators.pattern('[0-9]+')]],
      pas: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })



  constructor(private datas: DataService, private rout: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    var uname = this.registerForm.value.uname
    var pas = this.registerForm.value.pas
    var acnumber = this.registerForm.value.acnumber
    if(this.registerForm.valid){
    this.datas.register(acnumber, uname, pas).subscribe((result:any)=>{
    alert(result.message)
    this.rout.navigateByUrl('')
    },
    result=>{
      alert(result.error.message);
    }


    )

    
    
    }else{
      alert('form invalid')
    }
    


  }

}
