import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[] = [
    new Quote(1, 'Waste no more time arguing about what a good man should be. Be one.', 'Marcus Aurelius', 'Jackie ', new Date(2021,2,2), 0),
    new Quote(2, 'It is not death that a man should fear, but he should fear never beginning to live.', 'Marcus Aurelius', 'Julius Nyongesa ', new Date(2021,3,2), 0),
    new Quote(3, "It's Not About How Much We've Lost, It is About How Much We Have Left.", 'Tony Stark', 'Ken Muriuki', new Date(2021,3,2), 0),

  ];
  addNewQuote(quote:any){
    let quotesLength = this.quotes.length;
    quote.id = quotesLength+1;
    quote.uploadDate = new Date(quote.uploadDate)
    this.quotes.push(quote)
  }
  toggleInfo(index:number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  disposeQuote(toDispose:any, index:number){
    if (toDispose) {
      this.quotes.splice(index,1);
    }
  }
  appreciateClick(index:number){
    this.quotes[index].score++;
  }
  dislikeClick(index:number){
    this.quotes[index].score--;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
