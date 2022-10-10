import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   uname=""
   pas=""
   acnumber=""



  constructor(private datas:DataService,private rout:Router) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.uname
    var pas=this.pas
    var acnumber=this.acnumber
    const result=this.datas.register(acnumber,uname,pas)
    if(result){
      alert('registered successfully')
      this.rout.navigateByUrl('')
    }else{
      alert('user already exist')

    }

    // let userDetails=this.datas.userDetails
    // alert('registered')

  }

}
