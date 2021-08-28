import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlighterDirective } from './highlighter.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteInfoComponent,
    DateCountPipe,
    QuoteFormComponent,
    HighlighterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
