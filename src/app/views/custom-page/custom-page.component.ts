import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styles: []
})

export class CustomPageComponent implements OnInit {

  user_balance
  loading
  custom_page
  amount_sended
  error_status
  error_text

  constructor(public _store: Store<AppState>, private router:Router) {}

  ngOnInit() {
    this._store.select('app').subscribe(app => {
      this.user_balance = app.user_balance
      this.loading = app.loading
      this.custom_page = app.custom_page
      this.amount_sended = app.transaction.amount + app.transaction.gas
      this.error_text = app.error_text
      this.error_status = app.error_status
    })
  }

  goHome() {
    this.router.navigate(['/'])
  }
}
