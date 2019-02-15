import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetConfigAction } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config$ = this.store.pipe(select(selectConfig));

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    // That’s it… We already code the effect that is going to handle that action
    // and the reducer that is going to handle the success of that effect.
    // As soon as the Store has its new state the selector is going to change the value on our property. Amazing!
    this.store.dispatch(new GetConfigAction());
  }

}
