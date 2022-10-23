import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  timeDetails:any
  acno:any

  depositForm = this.fb.group({

   
    acnum: ['',[Validators.required,Validators.pattern('[0-9]+')]],
     pas: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
      amt: ['',[Validators.required,Validators.pattern('[0-9]+')]]
  })


  


  withdrawForm = this.fb.group({

   
    acnum1: ['',[Validators.required,Validators.pattern('[0-9]+')]],
     pas1: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
     withd: ['',[Validators.required,Validators.pattern('[0-9]+')]]
  })



  userOf=''



  constructor(private ds:DataService,private fb:FormBuilder,private rout:Router) {
    this.timeDetails=new Date()
    this.userOf=JSON.parse(localStorage.getItem('currentUser')||'')


   }

  ngOnInit(): void {
    //  if(!localStorage.getItem('currentAcno')){
    //   alert('please login')
    //   this.rout.navigateByUrl('')
    //  }

  }


  deposit(){
    var acnum=this.depositForm.value.acnum
    var pas=this.depositForm.value.pas
    var amt=this.depositForm.value.amt
   
    if(this.depositForm.valid){
      this.ds.deposit(acnum,pas,amt).subscribe((result:any)=>{
        alert(result.message)
        
        },
        result=>{
          alert(result.error.message);
        }
    
    
        )
    
        
        
        }
      else{
      alert('invalid form')
    }
    

  }

  withdraw(){
    var acnum1=this.withdrawForm.value.acnum1
    var pas1=this.withdrawForm.value.pas1
    var amt1=this.withdrawForm.value.withd
    
    if(this.withdrawForm.valid){
      this.ds.withdraw(acnum1,pas1,amt1).subscribe((result:any)=>{
        alert(result.message)
        
        },
        result=>{
          alert(result.error.message);
        }
    
    
        )
    
        
        
        }
      else{
      alert('invalid form')
    }
  
    
    
    

  }

  logout(){
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.rout.navigateByUrl('')
  }

  delete(){
    this.acno=JSON.parse(localStorage.getItem('currentAcno')|| '')
  }

  oncancelnew(){
    this.acno=''

  }

  onDelete(event:any){
    this.ds.deleteAcc(event).subscribe((result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl('')
    },
    result=>{
      alert(result.error.message)
    }
    
    )
  }

}
