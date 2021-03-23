import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notifications: any[] = [];

  isAuth = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor(
    private toastr: ToastrService,
    private websocketService: WebsocketService
  ) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

    this.websocketService.initWebSocket().then(() => {
      this.websocketService.subscribe('/topic/notifications', (event) => {
        const notification = event.body;
        this.showSuccess(notification.title, notification.text);
      });
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAllumer() {
    console.log('On allume tout !');
  }

  showSuccess(title: string, text: string) {
    this.toastr.success(title, text);
  }
}
