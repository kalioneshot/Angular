import { createSelector } from '@ngrx/store';
import { IConfigState } from '../state/config.state';
import { IAppState } from '../state/app.state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config
);
