import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
// The angular-in-memory-web-api module provides an in memory data store where you can create
// and fetch data and simulates a real REST API back-end.
// It works as a proxy for your real back-end. Each time you send a request,
// the module intercepts it, process it and returns the results from memory.
// This way, when you are ready to use a real API back-end
// you will not be required to change the API endpoints you added in your Angular code.
@Injectable({ providedIn: 'root' })
export class ArticlesData implements InMemoryDbService {
    createDb() {
        const articleDetails = [
            { id: '1', title: 'Kong: Becoming a King of API Gateways', category: 'API Gateways' },
            { id: '2', title: 'Angular in Action', category: 'Angular' },
            { id: '3', title: 'Playing with Java Microservices on Kubernetes and OpenShift (English Edition)', category: 'PAAS' }
        ];
        return { articles: articleDetails };
    }
}
