import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
    private _url: string = '../apidata/valuesdata.json'
    constructor(private _http: Http){}
    getAuthors(){
         return this._http.get(this._url)
        .map((response:Response) => response.json());
    }
    // getAuthors() : string[] {
    //     return ["one","two","http"];
    // }
}