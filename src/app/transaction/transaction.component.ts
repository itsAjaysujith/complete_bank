import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  acno:any
  trans:any
 

  constructor(private ds:DataService) { 

    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
    this.ds.getTaransaction(this.acno).subscribe((result:any)=>{
      this.trans=result.transactions
      
      },
      result=>{
        alert(result.error.message);
      }
  
  
      )
  
  }

  ngOnInit(): void {
  }

}
