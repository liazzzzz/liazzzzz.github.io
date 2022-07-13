import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Operation } from 'src/app/operations/operation';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const operations = [
      { id: 1, type: 'deposit', sum: 1000, note: 'Зарплата', createdAt: new Date() },
      { id: 2, type: 'withdraw', sum: 300, note: 'Кофе', createdAt: new Date() },
      { id: 3, type: 'withdraw', sum: 150, note: 'Такси', createdAt: new Date() }
    ];
    return { operations };
  }

  genId(operations: Operation[]): number {
    return operations.length > 0 ? Math.max(...operations.map(operation => operation.id)) + 1 : 1;
  }
}
