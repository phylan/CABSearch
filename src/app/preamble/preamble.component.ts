import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preamble',
  templateUrl: './preamble.component.html',
  styleUrls: ['./preamble.component.css']
})
export class PreambleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public numDecisions: number = 150; /* import from decision service */
}
