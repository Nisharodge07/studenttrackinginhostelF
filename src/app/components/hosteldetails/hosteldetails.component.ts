import { Component } from '@angular/core';
import { Hostel } from '../../models/hostel';
import { ActivatedRoute, Router } from '@angular/router';
import { HostelService } from '../../service/hostel.service';

@Component({
  selector: 'app-hosteldetails',
  templateUrl: './hosteldetails.component.html',
  styleUrl: './hosteldetails.component.css'
})
export class HosteldetailsComponent {

  constructor(private route:ActivatedRoute, private router:Router, private service:HostelService){}

  hostelid:number = 0;

  hostel:Hostel = new Hostel();

  ngOnInit(){

    this.hostel = new Hostel();

    //fetch inforamtion from routes 
    this.hostelid = this.route.snapshot.params['hostelid'];

//ye service ko data dete hai
    this.service.getOneHostel(this.hostelid).subscribe((data)=>{
      console.log(data);
      this.hostel = data;
    })
  }

}
