import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent {

  @Input()
  tableId: number = 1;
  @Output() menuSelectionEvent = new EventEmitter<string>();
  currentSelection = '';
  menu: string[] = ['pizza', 'burger', 'pasta'];
  myDateObject = new Date();
  myInput: string = '';

  handleSelectionChange(value: any) {
    this.currentSelection = value;
   // this.menuSelectionEvent.emit(value);
  }

  handleChangeStatus($event: MouseEvent) {
    //TODO implement
  }

}
