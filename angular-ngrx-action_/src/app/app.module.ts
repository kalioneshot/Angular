import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ArticleEffects } from './store/effects/article.effects';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducers';

import { environment } from 'src/environments/environment';
import { ArticleService } from './services/article.service';

// For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ArticlesData } from './data/article.data';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ArticleEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    InMemoryWebApiModule.forRoot(ArticlesData)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
