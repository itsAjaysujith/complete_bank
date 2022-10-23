import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()item:string | undefined

  // input used to parent child commu--here take string so use above syntax

  // output used to child parent commu--here it is an event so below syntax


  @Output() onCancel= new EventEmitter()
  @Output() onDelete=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()

  }

  delete(){
    this.onDelete.emit(this.item)

  }

}


  

// inorder to add data fro parent to child we use decorator--input decorator-- | is or--