import { Component } from '@angular/core';
import { Hostel } from '../../models/hostel';
import { HostelService } from '../../service/hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrl: './hostel.component.css'
})
export class HostelComponent {

  submitted = false;

  //dependency injection
  constructor(private service: HostelService,private router:Router){}

  //object creating
  hostel = new Hostel();
  onSubmit(){
    this.save();
    this.submitted = true;
  }

  save(){

    this.service.createHostel(this.hostel).subscribe();
    this.goto();

  }
  goto()
  {
    return this.router.navigate(['home'])
  }
}
