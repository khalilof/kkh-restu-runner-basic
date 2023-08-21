import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { FormsModule } from '@angular/forms';
import { MyUpperCasePipe } from './dashboard/my-upper-case.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardPageComponent,
    DashboardItemComponent,
    MyUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
