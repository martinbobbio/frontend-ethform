import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/providers/alert.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  constructor(public _alertService:AlertService , public _store: Store<AppState>) {}

  ngOnInit() {
  }

  onSubmit(data:any){
    console.log(data)
  }
}
