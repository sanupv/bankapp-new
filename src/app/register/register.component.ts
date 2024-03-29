import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  uname = ''
  acno = ''
  psw = ''

  constructor(private ds : DataService){
  }


  register()
  {
    var uname = this.uname
    var acno = this.acno
    var psw = this.psw

    const result = this.ds.register(acno,uname,psw)
    
    if(result){
      alert('registration success')
    }
    else{
      alert('User already exists')
    }
    
  }

}
