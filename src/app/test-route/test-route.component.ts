import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.scss']
})
export class TestRouteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
