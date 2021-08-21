import { Directive } from '@angular/core';
import {Quote} from './quote'

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  
  constructor() { }

}
