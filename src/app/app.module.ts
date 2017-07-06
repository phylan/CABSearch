import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DecisionDetailComponent } from './decision-detail/decision-detail.component';
import { SearchComponent } from './search/search.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { PreambleComponent } from './preamble/preamble.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DecisionDetailComponent,
    SearchComponent,
    ResultsListComponent,
    PreambleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
