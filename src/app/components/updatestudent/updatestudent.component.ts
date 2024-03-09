import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent {

  studentId: number = 0;
  student: Student = new Student();

  //take information from routes

  constructor(private route: ActivatedRoute, private router: Router, private service: StudentService) {

  }

  //load angular and initialize the page
  //when component load on page angular initialize init method
  ngOnInit() {

    //data nikalana hai or set krna hai
    //object createe'
    this.student = new Student();

    //apne palyer mai data aya
    this.studentId = this.route.snapshot.params['studentId'];

    //data lane ke liye subscribe kro
    this.service.getOneStud(this.studentId).subscribe((data) => {

      //data initialize on player
      console.log(data);
      this.student = data;
    })
  }

  onSubmit(){
    this.updateDetails();
  }

  updateDetails(){
    //
    this.service.updateStud(this.student).subscribe((data)=>
    {
      console.log(data);
      // this.player = new Players();
      this.goto();
    });
  }


  goto(){
    this.router.navigate(['listStudent']);
  }

}
