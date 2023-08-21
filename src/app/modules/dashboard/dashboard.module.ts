import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUiComponent } from './dashboard-ui/dashboard-ui.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { FormsModule } from '@angular/forms';
import { StatusCounterPipe } from './pipes/status-counter.pipe';


@NgModule({
  declarations: [
    DashboardUiComponent,
    DashboardItemComponent,
    StatusCounterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
