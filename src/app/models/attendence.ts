import { Student } from "./student";

export class Attendence
{
     attendence_id:number;
	  attendence_date!:Date;
	  attendence_status:String;
	  leaveDays:number;
    studId:number

      constructor()
      {
        this.attendence_id=0;
        this.attendence_date;
        this.attendence_status="";
        this.leaveDays=0;
        this.studId=0;

      }
      
}