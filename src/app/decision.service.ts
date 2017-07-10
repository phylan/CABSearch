import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Decision } from './decision';

@Injectable()
export class DecisionService {
  
  constructor(private http: Http) {}

  private endpoint = 'http://cabdecision-api.herokuapp.com/api/v1.0/search/'
	
  makeQuery(queryString: string): void {
	var apiCall = this.endpoint + queryString;
	this.http.get(apiCall)
		.subscribe(val => console.log(val));
  }	  
}
