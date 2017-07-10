import { Component, OnInit, Input } from '@angular/core';
import { Decision } from '../decision';

@Component({
  selector: 'app-decision-detail',
  templateUrl: './decision-detail.component.html',
  styleUrls: ['./decision-detail.component.css']
})
export class DecisionDetailComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

  @Input() decision: Decision;
}
