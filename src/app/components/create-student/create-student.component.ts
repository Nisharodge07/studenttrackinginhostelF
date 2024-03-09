import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {

  submitted = false;

  //dependency injection
  constructor(private service: StudentService , private router :Router){}

  //object creating
  student = new Student();
  onSubmit(){
    this.save();
    this.submitted = true;
  }

  save(){

    this.service.createStudent(this.student).subscribe();
    this.goto();

  }
  goto()
  {
    return this.router.navigate(['home'])
  }
}
