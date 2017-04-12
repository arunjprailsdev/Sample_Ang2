import { Component, OnInit } from '@angular/core';
import {HttpService} from './http-service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',providers:[HttpService],
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

 users = [];
  title = "see";
  constructor(private _UserService: HttpService) { }

  ngOnInit() {
    this._UserService.getAuthors()
     .subscribe(resUserData => this.users = resUserData);
  }
//  title = "service";
//  vals;
//   constructor(testService: HttpService) { 
//     this.vals = testService.getAuthors();
//   }
//   ngOnInit() {
//   }

}
