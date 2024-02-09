import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  // patiants:any | undefined;

  employees: Employee[] | any;

  // constructor(private patientService: PatientService){}

  // ngOnInit():void{
  //   this.patientService.getPatients().subscribe((data:Patiant[])=>{
  //     console.log(data);
  //     this.patients = data;
  //   });
  // }

  constructor(private employeeService: EmployeeService, 
    private router: Router){}

  ngOnInit(): void {
  this.getEmployees()
  }

  private getEmployees(){
    this.employeeService.getEmployees().subscribe(data =>{
      this.employees = data;
    });
  }
  

  updateEmployee(id:number){
    this.router.navigate(['update-employee', id])
  }
  
  deletEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    })
  }

}
