import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';
import { StudentLogin } from '../../models/studentLogin';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrl: './studentlogin.component.css'
})
export class StudentloginComponent {

  student:Student=new Student();
  msg:any='';
  constructor(private service:StudentService, private router:Router){}
  
    ngOnInit(){
     
  }
  
  login(){
    this.service.loginStudent(this.student).subscribe((data)=>{
      console.log("Response received");
      this.router.navigate(['/home1'])
  

  });
  }

}
