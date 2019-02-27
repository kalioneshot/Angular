import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActionEventEmitter, TypeAction } from 'src/app/models/event/actionEventEmitter';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: User[];

  @Output() userSelected: EventEmitter<ActionEventEmitter> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSelectUser(id: string) {
    const actionEvent = new ActionEventEmitter(TypeAction.DETAIL, id);
    this.userSelected.emit(actionEvent);
  }

  onEditUser(id: string) {
    const actionEvent = new ActionEventEmitter(TypeAction.EDIT, id);
    this.userSelected.emit(actionEvent);
  }

  onDeleteUser(id: string) {
    const actionEvent = new ActionEventEmitter(TypeAction.DELETE, id);
    this.userSelected.emit(actionEvent);
  }

}
