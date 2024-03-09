import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute,Route, Router } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  
  constructor(private route:ActivatedRoute, private router:Router, private service:StudentService){}
  

  studentId:number = 0;

  student:Student = new Student();

  ngOnInit(){

    this.student = new Student();

    //fetch inforamtion from routes 
    this.studentId = this.route.snapshot.params['studentId'];

//ye service ko data dete hai
    this.service.getOneStud(this.studentId).subscribe((data)=>{
      console.log(data);
      this.student = data;
    })
  }


}
