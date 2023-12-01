import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-sbb',
  templateUrl: './sbb.component.html',
  styles: [
    `img {
      max-height: 300px;
      width: auto;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }`
  ]
})
export class SbbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
