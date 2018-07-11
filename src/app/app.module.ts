import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { TwitterFeedService } from './twitter-feed/twitter-feed.service';

@NgModule({
  declarations: [
    AppComponent,
    TwitterFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "twitter-feed", component: TwitterFeedComponent}
    ])
  ],
  providers: [TwitterFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
