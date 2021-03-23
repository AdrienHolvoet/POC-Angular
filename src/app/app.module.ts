import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { CheckpointsComponent } from './checkpoints/checkpoints-container.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckpointDetailsComponent } from './checkpoints/checkpoint-details/checkpoint-details.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestRouteComponent } from './test-route/test-route.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader/';
TranslateModule.forRoot();

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-route', component: TestRouteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    CheckpointsComponent,
    CheckpointDetailsComponent,
    HeaderComponent,
    HomeComponent,
    TestRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
