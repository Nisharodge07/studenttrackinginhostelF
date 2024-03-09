import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendenceService } from '../../service/attendence.service';
import { Attendence } from '../../models/attendence';

@Component({
  selector: 'app-attenddetails',
  templateUrl: './attenddetails.component.html',
  styleUrl: './attenddetails.component.css'
})
export class AttenddetailsComponent {
  constructor(private route:ActivatedRoute, private router:Router, private service:AttendenceService){}
  

  attendId:number = 0;

  attendence:Attendence = new Attendence();

  ngOnInit(){

    this.attendence = new Attendence();

    //fetch inforamtion from routes 
    this.attendId = this.route.snapshot.params['attendId'];

//ye service ko data dete hai
    this.service.getOneAttendence(this.attendId).subscribe((data)=>{
      console.log(data);
      this.attendence = data;
    })
  }


}
