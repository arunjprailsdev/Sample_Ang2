import { Component, OnInit } from '@angular/core';
import {HttpService} from './http-service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',providers:[HttpService],
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

//  users = [];
getData: string;
  title = "from http service componenets";
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getAuthors()
    //  .subscribe(resUserData => this.users = resUserData);
    .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    )
  }
//  title = "service";
//  vals;
//   constructor(testService: HttpService) { 
//     this.vals = testService.getAuthors();
//   }
//   ngOnInit() {
//   }

}
