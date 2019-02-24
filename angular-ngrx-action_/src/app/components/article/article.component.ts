import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Store, select } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleState } from 'src/app/store/states/article.state';
import { getArticlesSelector, getMessageSelector } from 'src/app/store/selectors/article.selectors';
import { ResetAction, ShowAllAction, CreateAction, GetByIdAction } from 'src/app/store/actions/article.action';
import { AppState } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles$: Observable<Article[]>;
  message$: Observable<any>;
  task = '';

  articleForm = this.formBuilder.group({
    id: ['', Validators.required],
    title: '',
    category: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>) {
    this.articles$ = this.store.pipe(select(getArticlesSelector));
    this.message$ = this.store.pipe(select(getMessageSelector));
  }

  get id() {
    return this.articleForm.get('id');
  }
  onFormSubmit() {
    if (this.articleForm.valid) {
      const article = this.articleForm.value;
      this.createArticle(article);
      this.articleForm.reset();
    }
  }
  createArticleView() {
    this.task = 'create';
    this.store.dispatch(new ResetAction());
  }
  getArticleByIdView() {
    this.task = 'get';
    this.store.dispatch(new ResetAction());
  }
  loadAllArticles() {
    this.task = 'all';
    this.store.dispatch(new ShowAllAction());
  }
  createArticle(article: Article) {
    this.store.dispatch(new CreateAction(article));
  }
  searchArticleById(articleId: string) {
    this.store.dispatch(new GetByIdAction(articleId));
  }

  ngOnInit() {
  }

}
