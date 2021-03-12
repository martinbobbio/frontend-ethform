
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { SetLoadingAction, SetTransactionAction, SetCustomPageAction } from '../actions/app.action';
import { Transaction } from '../models/transaction.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router:Router, private _store:Store<AppState>, private http: HttpClient,) { }

  async sendTransaction(data: Transaction){

    this.router.navigate(['custom-page'])
    this._store.dispatch(new SetLoadingAction(true))

    //This timer is only for simulate the loading
    setTimeout(async() => {
      //const response = await this.http.post('api/send-transaction', data)
      this._store.dispatch(new SetTransactionAction(data))
      this._store.dispatch(new SetCustomPageAction("PAGE_ERROR"))
      this._store.dispatch(new SetLoadingAction(false))
    }, 3000);
    
  }

}