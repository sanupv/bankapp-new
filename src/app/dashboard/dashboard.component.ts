import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user = ''

  constructor(private ds: DataService, private fb: FormBuilder) {
    //access username 
    this.user = this.ds.currentuser
  }

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawalForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  deposit() {

    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt

    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, psw, amnt)

      if (result) {
        alert(`${amnt} credited to your account and the balance is ${result}`)
      }
      else {
        alert('Incorrect Account number or Password')
      }
    }
    else{
      alert('Form is invalid')
    }
  }

  withdraw() {
    var acno1 = this.withdrawalForm.value.acno1
    var psw1 = this.withdrawalForm.value.psw1
    var amnt1 = this.withdrawalForm.value.amnt1

    if (this.withdrawalForm.valid) {
      const result = this.ds.withdraw(acno1, psw1, amnt1)
      if (result) {
        alert(`${amnt1} debited from your account and the balance is ${result}`)
      }
    }
    else{
      alert('Form is inavalid')
    }
  }
}
