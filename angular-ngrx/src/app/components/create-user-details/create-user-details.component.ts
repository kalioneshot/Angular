import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { CreateUserAction } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-create-user-details',
  templateUrl: './create-user-details.component.html',
  styleUrls: ['./create-user-details.component.scss']
})
export class CreateUserDetailsComponent implements OnInit {

  submitted = false;
  model: User;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.model = new User('', '', '', '');
  }

  onSubmit() {

    this.submitted = true;

    const user = new User(this.model.id, this.model.name, this.model.cardNumber, this.model.cardType);

    // Dispatch the create customer action
    this.store.dispatch(new CreateUserAction(user));
  }
}
