import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  employeeList: Employee[];
  constructor(private http: Http) { }

  postEmployee(emp: Employee) {
    let body = JSON.stringify(emp);
    console.log(body);
    let headerOptions = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:3000/Employee', body,requestOptions).map(x => x.json());
  }

  putEmployee(id, emp) {
    let body = JSON.stringify(emp);
    console.log(body);
    let headerOptions = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:3000/Employee/' + id,
      body,
      requestOptions).map(res => res.json());
  }
   getEmployeeList() {
     this.http.get('http://localhost:3000/Employee')
     .map((data: Response) => {
     return data.json() as Employee[];
     });
   }

  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:28750/Employee/' + id).map(res => res.json());
  }
}
