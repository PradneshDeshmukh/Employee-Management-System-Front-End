import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employee";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`)
  }

  createEmployee(Employees: Employee): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, Employee);
  }

  updateEmployee(id:number, employee:Employee): Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id:number) : Observable<object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
    
  }
}
