import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints-container.component.html',
  styleUrls: ['./checkpoints-container.component.scss']
})
export class CheckpointsComponent implements OnInit {
  checkpoints: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost/pokaiok-dev/checkpoint/').subscribe(
      (response) => {
        this.checkpoints = response;
        console.log(response);
      },
      (error) => {
        console.log('Erreur ! : ' + JSON.stringify(error));
      }
    );
  }
}
