import { IConfig } from 'src/app/models/config.interface';

// Interface with the config state structure
export interface IConfigState {
    config: IConfig;
}

// Initial config state that implements the recently created interface
export const initialConfigState: IConfigState = {
    config: null
};
