import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TwitterFeedService, tweetPayload } from './twitter-feed.service';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {

  constructor(private twit:TwitterFeedService){}
  
  ngOnInit() {
    this.showMeTweets();
  }


  showMeTweets(){
    this.twit.getTweetStream().subscribe((event) => {
      console.log(event);
    }, (error) => {
      console.log(error);
    });
    }
}
 