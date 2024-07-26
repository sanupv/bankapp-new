import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'node:console';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  aim = "Bankapp login"
  data = "Enter Account Number"

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  login() {

    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw

    if (this.loginForm.valid) {
      const result = this.ds.login(acno, psw)
      if (result) {
        alert('login success')
        this.router.navigateByUrl('dashboard')
      }
      else {
        alert('Incorrect username or password')
      }
    }
    else{
      alert('Invalid Form')
    }
  }
}
