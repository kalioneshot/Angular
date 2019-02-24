import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  url = '/api/articles';

  // Get all articles.
  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

  // Create a article.
  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article);
  }

  // Get a article by ID.
  getArticleById(id: string): Observable<Article[]> {
    console.log(id);
    return this.http.get<Article[]>(this.url + '?id=' + id);
  }

}
