import { Directive } from '@angular/core';
import {Quote} from './quote'
import { QuoteComponent } from './quote/quote.component';
@Directive({
  selector: '[appHighlighter]'
})

export class HighlighterDirective {
   
  constructor() { }

}
