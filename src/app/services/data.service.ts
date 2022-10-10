import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  currentUser:any

  currentAcno:any

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000,transactions:[]},
    1001:{acno:1001,username:"bhim",password:123,balance:100000,transactions:[]},
    1002:{acno:1002,username:"ajay",password:123,balance:100000,transactions:[]},
    1003:{acno:1003,username:"hari",password:123,balance:100000,transactions:[]}
  }

  constructor() { }

  register(acno:any,username:any,password:any){

    let userDetails=this.userDetails
  // in this function we create a logic whic we want to use in another function
    if(acno in userDetails){
     return false
    }else{
      userDetails[acno]={acno,username,password,balance:0}
      console.log(userDetails);
    
      
      return true;
    }
    

  }


  login(acnum:any,pawrd:any){
  
    let user=this.userDetails
    if(acnum in user){
      if(pawrd==user[acnum]['password']){
        this.currentUser=user[acnum]['username']
        this.currentAcno=acnum
        return true

      }else{
        alert('incorrect password')
        return false
      }

    }else{
      alert('user not exist')
      return false
    }
    
  }

  deposit(acnum:any,pas:any,amt:any){
    let use=this.userDetails
    // here amount in string type so we need to convert it into number using parseInt method
    var amnt=parseInt(amt) 
    if(acnum in use){
      if(pas==use[acnum]['password']){
        use[acnum]['balance']+=amnt
        use[acnum]['transactions'].push({
          type:'credit',amount:amnt
        })
        return use[acnum]['balance']
      }else{
        alert('incorrect password')
      }
    }else{
       alert('user not exist')
       return false

    }

    
  }


  withdraw(acnum1:any,pas1:any,withd:any){
    let use=this.userDetails
    // here amount in string type so we need to convert it into number using parseInt method
    var amnt=parseInt(withd) 
    if(acnum1 in use){
      if(pas1==use[acnum1]['password']){
        if(withd>use[acnum1]['balance']){
          alert('insufficient balance')
        }
        else {
          use[acnum1]['balance']-=amnt
          use[acnum1]['transactions'].push({type:'debit',amount:amnt})
          return use[acnum1]['balance']

        }
       
      }else{
        alert('incorrect password')
      }
    }else{
       alert('user not exist')
       return false
        
    }

    
  }

  getTaransaction(acno:any){
    return this.userDetails[acno]['transactions']
    

  }


}
