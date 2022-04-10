import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuoteModel } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotesUrl = 'http://127.0.0.1:8000/api/quotes/'

  constructor(private http: HttpClient) { }

  getAllQuotes(): Observable<QuoteModel[]> {
    return this.http.get<QuoteModel[]>(this.quotesUrl);
  }
}
