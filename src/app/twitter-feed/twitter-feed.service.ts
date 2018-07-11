import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

// var Twitter = require('twitter')

export interface hashtags{
    text: string;
    indices: Array<number>;
};

export interface tweetPayload {
    text: string;
    user_name: string;
    hashtags: hashtags[]
};

@Injectable()
export class TwitterFeedService{

    constructor(private http:HttpClient) {}
    
    getTweetStream():Observable<tweetPayload[]> {
        return this.http.get<tweetPayload[]>("/api/tweets")
    }
}