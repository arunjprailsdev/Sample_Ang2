import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',providers:[TestService],
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {
 title = "service";
 vals;
  constructor(testService: TestService) { 
    this.vals = testService.getAuthors();
  }

  ngOnInit() {
  }

}
