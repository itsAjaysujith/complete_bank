import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// in order header shouldbe overloaded--means want two items in header
const options={
  headers:new HttpHeaders()

}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {

    
   }

  register(acno:any,username:any,password:any){

    const data={acno,username,password}
// should return due to this asyncronous--ie,diff ports
    return this.http.post('http://localhost:3000/register',data)


}


  login(acnum:any,pawrd:any){
    const data={acnum,pawrd}
    return this.http.post('http://localhost:3000/login',data)
  
  
  }

  getToken(){
  //  fetch token from local storage
     const token=JSON.parse(localStorage.getItem('token')||'')

    //  1)append token inside headers
    //  1.1)create header
      let header=new HttpHeaders()
      //1.3)append token to header 
      if(token){
        options.headers=header.append('token1',token)
        
      }
      return options;
      



  }

  deposit(acnum:any,pas:any,amt:any){
    const data={acnum,pas,amt}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())
  

    
  }


  withdraw(acnum1:any,pas1:any,withd:any){
    const data={acnum1,pas1,withd}
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
  

    
  }

  getTaransaction(acno:any){

    const data={acno}
    return this.http.post('http://localhost:3000/transaction',data,this.getToken())
    

  }

 deleteAcc(acno:any){
  return this.http.delete('http://localhost:3000/deleteacc/'+acno)

 }


}
