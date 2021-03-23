import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkpoint-details',
  templateUrl: './checkpoint-details.component.html',
  styleUrls: ['./checkpoint-details.component.scss']
})
export class CheckpointDetailsComponent implements OnInit {
  @Input() checkpointId = '';
  @Input() checkpointName = '';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
