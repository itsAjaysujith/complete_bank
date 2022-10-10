import { Component, OnInit } from '@angular/core';
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
  



  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  

  login(){
    
    var acnum=this.accno
    var pawrd=this.pass
    const log=this.ds.login(acnum,pawrd)
    if(log){
      alert('login success')
      this.router.navigateByUrl('dashboard')

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
