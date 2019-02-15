import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetConfigAction, EConfigActions, GetConfigSuccessAction } from '../actions/config.actions';
import { switchMap } from 'rxjs/operators';
import { IConfig } from 'src/app/models/config.interface';
import {of} from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Injectable()
export class ConfigEffects {

    @Effect()
    getConfig$ = this.action$.pipe(
        ofType<GetConfigAction>(EConfigActions.GetConfig),
        switchMap(() => this.configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccessAction(config));
        })
    );

    constructor(
        private configService: ConfigService,
        private action$: Actions) {}
}
