import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post'
@Injectable()
export class PostService {
    private postUrl = 'http://localhost:3000/api/v1/users/1';
    constructor(private http: Http) {}
    getPosts(): Observable<Post []>{
        return this.http.get(this.postUrl)
        .map((response: Response) => <Post []>response.json())
    }
}
