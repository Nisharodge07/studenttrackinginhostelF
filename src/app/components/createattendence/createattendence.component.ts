import { Component } from '@angular/core';
import { AttendenceService } from '../../service/attendence.service';
import { Router } from '@angular/router';
import { Attendence } from '../../models/attendence';

@Component({
  selector: 'app-createattendence',
  templateUrl: './createattendence.component.html',
  styleUrl: './createattendence.component.css'
})
export class CreateattendenceComponent {
  submitted = false;

  //dependency injection
  constructor(private service: AttendenceService , private router :Router){}

  //object creating
  attendence = new Attendence();
  onSubmit(){
    this.save();
    this.submitted = true;
  }

  save(){

    this.service.createAttendence(this.attendence).subscribe();
    this.goto();

  }
  goto()
  {
    return this.router.navigate(['home'])
  }
}
