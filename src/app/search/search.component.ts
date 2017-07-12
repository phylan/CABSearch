import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecisionService } from '../decision.service'
import { Decision } from '../decision';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DecisionService]
})
export class SearchComponent implements OnInit {

  results: Decision[]

  constructor(private decisionService: DecisionService) { }

  ngOnInit() {
  }

  getQuery(queryText: HTMLInputElement): void {
	let queryTextEncoded = encodeURIComponent(queryText.value);
	console.log(`User entered: ${queryTextEncoded}`);
	this.decisionService
		.makeQuery(queryTextEncoded)
		.subscribe(d => {
			this.results = d;
			console.log(this.results);
		});
  }
}