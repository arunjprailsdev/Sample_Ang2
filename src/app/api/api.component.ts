import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
books;
  constructor(private http: Http) { 
    http.get("http://localhost:3000/posts.json")
    .subscribe(res => this.books = res.json())
  }

  ngOnInit() {
  }

}
