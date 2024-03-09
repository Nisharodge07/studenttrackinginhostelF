import { Student } from "./student";

export class Guardian
{
     guardian_id:number;
	  guardian_name:String;
	  guardian_relation:String;
	  guardian_contact:number;
	  guardian_email:String;
    studentId: number;

      constructor()
      {
        this.guardian_id=0;
        this.guardian_name="";
        this.guardian_contact=0;
        this.guardian_relation="";
        this.guardian_email="";
        this.studentId=0;
      }
}