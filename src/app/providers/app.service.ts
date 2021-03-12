
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { SetLoadingAction, SetTransactionAction, SetCustomPageAction, SetErrorAction } from '../actions/app.action';
import { Transaction } from '../models/transaction.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface Response {
  success: string
  errorMessage: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router:Router, private _store:Store<AppState>, private http: HttpClient,) { }

  /**
   * @description The method sends the data entered by the user with the method
   *  post to the api and displays the success or error screen
   *
   * @param data - This object contains the transaction of the user (amount, gas, address)
   * @returns Nothing
   */
  sendTransaction(data: Transaction){

    this.router.navigate(['custom-page'])
    this._store.dispatch(new SetLoadingAction(true))

    // This timer is only for see the loading
    setTimeout(() => {
      this.http.post("https://rcn.api/send-transaction", data).subscribe((response:Response) => {
      if(response.success){
        this._store.dispatch(new SetTransactionAction(data))
      } else {
        this._store.dispatch(new SetCustomPageAction("PAGE_ERROR"))
        this._store.dispatch(new SetLoadingAction(false))
      }
    }, (error:HttpErrorResponse) => {
      console.log(error)
      this._store.dispatch(new SetErrorAction(error.status, error.statusText))
    })
    }, 2000);

  }

}