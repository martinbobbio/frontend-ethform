import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-balance',
  templateUrl: './user-balance.component.html',
  styles: []
})

export class UserBalanceComponent implements OnInit {

  @Input() userBalance: number;

  ngOnInit() {
  }

}
