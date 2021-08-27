import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[] = [
    new Quote(1, 'Waste no more time arguing about what a good man should be. Be one.', 'Marcus Aurelius', 'Jackie ', new Date(2021,2,2), 0),
    new Quote(2, 'It is not death that a man should fear, but he should fear never beginning to live.', 'Marcus Aurelius', 'Julius Nyongesa ', new Date(2021,3,2), 0),
    new Quote(3, "Life is what happens to you while you're busy making other plans.", 'John Lennon', 'Ken Muriuki', new Date(2021,3,2), 0),
    new Quote(4, "Destiny waits for no man. Not even one who shall bring the universe to its knees.", "Thanos", "William", new Date(2021,5,2), 0),

  ];

  likeds: Quote[]=[];

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
  mostAppreciated(index:number){
    this.likeds.splice(0, this.likeds.length);
    
    var largest = Math.max.apply(Math, this.quotes.map(function(o) { return o.score; }))
    
    if (this.quotes[index].score == largest){//use two equal signs to fix liking issue
       this.likeds.push(this.quotes[index]);
    }
  }
    
  constructor() { }

  ngOnInit(): void {
    
  }

  
}
