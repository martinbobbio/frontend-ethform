import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/providers/alert.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import Web3 from 'web3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  //0xA11e73F851C12d8d25a7b88a6121AD365De1838c

  constructor(public _alertService:AlertService , public _store: Store<AppState>) {}

  user_balance
  gas
  txt_amount_error

  validateAmount = (amount:any) => {
    this.txt_amount_error = null
    if(amount === '' || amount === 0 || amount === null) return false
    else if(amount < 0) {
      this.txt_amount_error = 'You cannot enter an amount less than 0'
      return false
    }
    else if((amount+this.gas) < this.user_balance){
      return true
    }
    this.txt_amount_error = 'The amount is higher than the total of your current balance and gas'
    return false
  }

  validateAddress = (address:string) => {
    return Web3.utils.isAddress(address)
  }

  ngOnInit() {
    this._store.select('app').subscribe(app => {
      console.log(app)
      this.user_balance = app.user_balance
      this.gas = app.transaction.gas
    })
  }

  onSubmit(data:any){
    console.log(data)
  }
}
