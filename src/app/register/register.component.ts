import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  register() {

    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw
    if (this.registerForm.valid) {
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
    else {
      alert('Invalid Form')
    }
  }
}
