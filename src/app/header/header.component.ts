import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';

  notifications: any;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
