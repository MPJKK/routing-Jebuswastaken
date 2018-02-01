import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    TopBarComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
