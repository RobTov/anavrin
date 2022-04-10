import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { QuoteModel } from '../../models/quote.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }
  quotes: QuoteModel[];
  randomQuote: QuoteModel = {id: 99, author: "", text: ""};

  ngOnInit(): void {
    this.quoteService.getAllQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
        this.randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      });
  }
  
  getRandomQuote() {
    
  }
}
