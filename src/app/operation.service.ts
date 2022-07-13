import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Operation } from "./operations/operation";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private operationsUrl = 'api/operations';

  constructor(
    private http: HttpClient
  ) {}

  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.operationsUrl)
      .pipe(
        catchError(this.handleError<Operation[]>('getOperations', []))
      );
  }

  getOperation(id: number): Observable<Operation>{
    const url = `${this.operationsUrl}/${id}`;
    return this.http.get<Operation>(url).pipe(
      catchError(this.handleError<Operation>(`getHero id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateOperation(operation: Operation): Observable<any> {
    return this.http.put(this.operationsUrl, operation, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(this.operationsUrl, operation, this.httpOptions).pipe(
      catchError(this.handleError<Operation>('addOperation'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // private getDeposit(): number {
  //   return 0;
  // }

}
