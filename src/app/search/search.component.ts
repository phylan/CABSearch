import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecisionService } from '../decision.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DecisionService]
})
export class SearchComponent implements OnInit {

  constructor(private decisionService: DecisionService) { }

  ngOnInit() {
  }

  getQuery(queryText: HTMLInputElement): void {
	console.log(`User entered: ${queryText.value}`);
	var resp = this.decisionService.makeQuery(queryText.value);
  }
}