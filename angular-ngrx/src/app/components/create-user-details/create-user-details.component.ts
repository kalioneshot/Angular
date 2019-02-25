import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-user-details',
  templateUrl: './create-user-details.component.html',
  styleUrls: ['./create-user-details.component.scss']
})
export class CreateUserDetailsComponent implements OnInit {

  submitted = false;
  model: User;

  constructor() { }

  ngOnInit() {
    this.model = new User('', '', '', '');
  }

  onSubmit() { this.submitted = true; }

}
