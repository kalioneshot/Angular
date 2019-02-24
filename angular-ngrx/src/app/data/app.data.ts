import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
// The angular-in-memory-web-api module provides an in memory data store where you can create
// and fetch data and simulates a real REST API back-end.
// It works as a proxy for your real back-end. Each time you send a request,
// the module intercepts it, process it and returns the results from memory.
// This way, when you are ready to use a real API back-end
// you will not be required to change the API endpoints you added in your Angular code.
@Injectable({ providedIn: 'root' })
export class AppData implements InMemoryDbService {
    createDb() {
        const usersDB = [
            { id: '1', name: 'Robert Tail', cardNumber: 'XXXX-XXXX-XXXX-4321', cardType: 'Visa' },
            { id: '2', name: 'Bernard Collard', cardNumber: 'XXXX-XXXX-XXXX-1369', cardType: 'Master' },
            { id: '3', name: 'Edison Cavani', cardNumber: 'XXXX-XXXX-XXXX-8888', cardType: 'Visa' }
        ];
        const configDB = { adminName: 'Roignant Cédric', permissions: ['users'] };
        return { user: usersDB, config: configDB};
    }
}
