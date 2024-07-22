import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  uname = ''
  acno = ''
  psw = ''

  constructor(private ds: DataService, private router:Router) {
  }


  register() {
    var uname = this.uname
    var acno = this.acno
    var psw = this.psw

    const result = this.ds.register(acno, uname, psw)

    if (result) {
      alert('registration success')
      this.router.navigateByUrl('')
    }
    else {
      alert('User already exists')
      this.router.navigateByUrl('')    
    }
  }
}
