import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee:Employee = new Employee();
  id:number | any;

  constructor(private employeeService: EmployeeService, 
    private router: Router){}

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },
    error => console.log(error)
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
  
}
