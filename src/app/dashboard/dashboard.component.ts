import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acnum=''
  pas=''
  amt=''


  acnum1=''
  pas1=''
  withd=''
  userOf=''

  constructor(private ds:DataService) {
    this.userOf=this.ds.currentUser


   }

  ngOnInit(): void {
  }


  deposit(){
    var acnum=this.acnum
    var pas=this.pas
    var amt=this.amt
    const res=this.ds.deposit(acnum,pas,amt)
    if(res){
      alert(`${amt} is credited , new balance ${res}`)


    }
    alert('Deposit successfully')

  }

  withdraw(){
    var acnum1=this.acnum1
    var pas1=this.pas1
    var amt1=this.withd
    const result=this.ds.withdraw(acnum1,pas1,amt1)
    if(result){
      alert('withdraw successfully')
      alert(`${amt1} is debited , new balance ${result}`)
      



    }
    
    
    

  }

}
