import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0 },
    1001: { acno: 1001, username: "amal", password: 123, balance: 0 },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0 },
    1003: { acno: 1003, username: "megha", password: 123, balance: 0 },
    1004: { acno: 1004, username: "nirmal", password: 123, balance: 0 }
  }
  
  register(acno:any,uname:any,psw:any)
  {
    var userDetails = this.userDetails
    if(acno in userDetails){
      return false 
    }
    else{
      userDetails[acno] = {acno,username:uname,password:psw,balance:0}
      console.log(userDetails);
      return true
    }
  }

  login(acno:any,psw:any) {
  
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
      return true
      }
      else {
        return false
      }
    }
  else {
        return false
      }
    }
}
