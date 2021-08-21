import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import{Quote}from '../quote'
@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  @Input() quote! :Quote;
  @Output() toDispose = new EventEmitter <boolean>();
  
  quoteDisposal(dispose:boolean){
    this.toDispose.emit(dispose);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
