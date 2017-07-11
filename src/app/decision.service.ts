import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Decision } from './decision';

import 'rxjs/add/operator/map'

@Injectable()
export class DecisionService {
  
  constructor(private http: Http) {}

  private endpoint = 'https://cabdecision-api.herokuapp.com/api/v1.0/search/'
	
  makeQuery(queryString: string): Observable<Decision[]>{
	let decisions$ = this.http
		.get(this.endpoint + queryString)
		.map(mapDecisions)
		return decisions$;
  }	  
}

function mapDecisions(response:Response): Decision[]{
	return response.json().results.map(toDecision)
}

function toDecision(r:any): Decision {
	let decision = <Decision>({
		date: r.date,
		district: r.district,
		docket: r.docket,
		school: r.school,
		source_url: r.source_url,
		title: r.title,
		excerpts: r.excerpts,
	});
	return decision;
}