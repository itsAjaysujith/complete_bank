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

    this.acno=this.ds.currentAcno
    this.trans=this.ds.getTaransaction(this.acno)
    console.log(this.trans);
    


  }

  ngOnInit(): void {
  }

}
