import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { log } from 'console';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  acno: any
  transaction: any
  constructor(private ds: DataService) {

    this.acno = this.ds.currentacno
    this.transaction = this.ds.gettransaction(this.acno)
    
  }
}
