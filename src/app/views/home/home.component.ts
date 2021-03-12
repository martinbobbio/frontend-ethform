import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import Web3 from 'web3';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  constructor(public _appService:AppService , public _store: Store<AppState>) {}

  user_balance
  gas
  txt_amount_error

  /**
   * @description It is validated if the amount is less than the current balance
   *
   * @param amount - The amount of the form
   * @returns The status of validation
   */
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

  /**
   * @description It is validated if the eth address is correct with the library of WEB3
   *
   * @param address - The address of the form
   * @returns The status of validation
   */
  validateAddress = (address:string) => {
    return Web3.utils.isAddress(address)
  }

  ngOnInit() {
    this._store.select('app').subscribe(app => {
      this.user_balance = app.user_balance
      this.gas = app.transaction.gas
    })
  }

  /**
   * @description Method to send the data and make the transaction
   *
   * @param data - This is an object that contains the address, amount and gas
   * @returns Nothing
   */
  onSubmit(data:Transaction){
    data.gas = this.gas
    this._appService.sendTransaction(data)
  }
}
