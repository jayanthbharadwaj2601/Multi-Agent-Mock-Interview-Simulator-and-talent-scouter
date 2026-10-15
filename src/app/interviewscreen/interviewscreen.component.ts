import { Component } from '@angular/core';
import { VariableholderService } from '../variableholder.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interviewscreen',
  standalone: true,
  imports: [],
  templateUrl: './interviewscreen.component.html',
  styleUrl: './interviewscreen.component.css'
})
export class InterviewscreenComponent {
  constructor(public variableholder:VariableholderService,public router:Router,public http:HttpClient){
    console.log("Hello");
  }
  ngOnInit(){
    this.http.post("http://127.0.0.1:5000/InvokeAgent",{"JD":this.variableholder.JD,"Candidate":this.variableholder.Candidate,"Resume":this.variableholder.Resume,"Conversation":this.variableholder.Conversation},{observe:"response"}).subscribe(
      response1=>{
        let body = response1.body
        console.log("this is");
        console.log(body); 
      }
    )
  }
}
