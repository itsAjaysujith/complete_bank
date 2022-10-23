import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='your banking partner'
  acno='acnumber'
  accno=''
  pass=''


  loginForm = this.fb.group({
     accno: ['',[Validators.required,Validators.pattern('[0-9]+')]],
     pass: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })
  



  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  

  login(){
    
    var acnum=this.loginForm.value.accno
    var pawrd=this.loginForm.value.pass
    
    if(this.loginForm.valid){
      this.ds.login(acnum,pawrd).subscribe((result:any)=>{

        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl('dashboard')
        },
        result=>{
          alert(result.error.message);
         
        }
    
    
        )
    
    

    }else{
      alert('invalid form')

    }
    
    
  }



  // login(a:any,b:any){

  //   console.log(a.value);
  //   console.log(b.value);
    
    
  //   var acnum=a.value
  //   var pawrd=b.value
  //   let user=this.userDetails
  //   if(acnum in user){
  //     if(pawrd==user[acnum]['password']){
  //       alert('login success')
  //     }else{
  //       alert('incorrect password')
  //     }

  //   }else{
  //     alert('user not exist')
  //   }
    
  // }

  



}
