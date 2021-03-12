import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styles: []
})

export class WrapperComponent implements OnInit {

  @Input() title: string;

  ngOnInit() {
  }

}
