import { Observable } from "rxjs/internal/Observable";

export class Student
{
    studId:number;
	studFirstName:String;
    studLastName:String;
    studDOB!: Date;
	studContact:number;
	studEmail:String;
	studPassword:String;
	studAddress:String;

    constructor()
    {
        this.studId=0;
        
        this.studLastName= "";
       this.studFirstName =" ";
        this.studDOB;
        this.studContact=0;
        this.studEmail="";
        this.studPassword="";
        this.studAddress="";
    }
}