import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
    // private _url: string = '../apidata/valuesdata.json'
    constructor(private _http: Http){}
    getAuthors(){
        //  return this._http.get(this._url)
        return this._http.get('http://date.jsontest.com')
        // .map((response:Response) => response.json());
        .map(res => res.json());
    }
    // getAuthors() : string[] {
    //     return ["one","two","http"];
    // }
}