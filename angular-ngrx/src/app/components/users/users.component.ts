import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: User[];

  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
