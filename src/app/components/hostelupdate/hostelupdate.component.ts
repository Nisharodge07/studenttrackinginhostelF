import { Component } from '@angular/core';
import { Hostel } from '../../models/hostel';
import { ActivatedRoute, Router } from '@angular/router';
import { HostelService } from '../../service/hostel.service';

@Component({
  selector: 'app-hostelupdate',
  templateUrl: './hostelupdate.component.html',
  styleUrl: './hostelupdate.component.css'
})
export class HostelupdateComponent {

  hostelid: number = 0;
  hostel: Hostel = new Hostel();

  //take information from routes

  constructor(private route: ActivatedRoute, private router: Router, private service: HostelService) {

  }

  //load angular and initialize the page
  //when component load on page angular initialize init method
  ngOnInit() {

    //data nikalana hai or set krna hai
    //object createe'
    this.hostel = new Hostel();

    //apne palyer mai data aya
    this.hostelid = this.route.snapshot.params['hostelid'];

    //data lane ke liye subscribe kro
    this.service.getOneHostel(this.hostelid).subscribe((data) => {

      //data initialize on player
      console.log(data);
      this.hostel = data;
    })
  }

  onSubmit(){
    this.updateDetails();
  }

  updateDetails(){
    //
    this.service.updateHostel(this.hostel).subscribe((data)=>
    {
      console.log(data);
      // this.player = new Players();
      this.goto();
    });
  }


  goto(){
    this.router.navigate(['hostellist']);
  }
}
