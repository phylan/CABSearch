import { Component, Input, OnInit } from '@angular/core';
import { Decision } from '../decision';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() results: Decision[];

}
