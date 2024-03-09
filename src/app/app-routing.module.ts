import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';
import { HostelComponent } from './components/hostel/hostel.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { RoomComponent } from './components/room/room.component';
import { GuardianComponent } from './components/guardian/guardian.component';
// import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HostellistComponent } from './components/hostellist/hostellist.component';
import { HostelupdateComponent } from './components/hostelupdate/hostelupdate.component';
import { HosteldetailsComponent } from './components/hosteldetails/hosteldetails.component';
import { GuardiandetailsComponent } from './components/guardiandetails/guardiandetails.component';
// import { GuardianlistComponent } from './components/guardianlist/guardianlist.component';
import { UpdateguardianComponent } from './components/updateguardian/updateguardian.component';
import { GuardianlistComponent } from './components/guardianlist/guardianlist.component';
import { AttendlistComponent } from './components/attendlist/attendlist.component';
import { AttenddetailsComponent } from './components/attenddetails/attenddetails.component';
import { UpdateattendComponent } from './components/updateattend/updateattend.component';
import { Home1Component } from './components/home1/home1.component';

const routes: Routes = [
  {
    path:'home',
    component:Home1Component
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
  path:'add',
  component: CreateStudentComponent
  },
  {

    path:'getAllstud',
    component:StudentlistComponent
  },
  {
    path:'listStudent',
    component:StudentlistComponent
  },
  {
    path:'details/:studentId',
    component:StudentDetailsComponent
  },
  {
    path:'update/:studemtId',
    component:UpdatestudentComponent
  },
  {
    path:'studlogin',
    component:StudentloginComponent
  },
  {
    path:'addHostel',
    component:HostelComponent
  },
  {
    path:'addAttendence',
    component:AttendenceComponent
  },
  {
    path:'addRoom',
    component:RoomComponent
  },
  {
    path:'addGuardian',
    component:GuardianComponent
  },
  {
    path:'guardiandetails/:guardian_id',
    component:GuardiandetailsComponent
  },
  {
    path:'updateGuardian/:guardian_id',
    component:UpdateguardianComponent
  },
  {
    path:'getAllGuardian',
    component:GuardianlistComponent
  },
  {
    path:'guardianList',
    component:GuardianlistComponent
  },
 
  {
    path:'addHostel',
    component:HostelComponent
  },
  {
    path:'hostellist',
    component:HostellistComponent
  },
  {
    path:'updatehostel/:hostelid',
    component:HostelupdateComponent
  },
  {
    path:'hosteldetails/:hostelid',
    component:HosteldetailsComponent

  },
  {
    path:'addattendence',
    component:AttendenceComponent
  },
  {
    path:'attendList',
    component:AttendlistComponent
  },
  {
    path:'attendDetails/:attendId',
    component:AttenddetailsComponent
  },
  {
    path:'updateAttend/:attendId',
    component:UpdateattendComponent
  }

  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
