import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VariableholderService } from '../variableholder.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public router:Router,public variableholder:VariableholderService){
    
  }
  StartInterview(JD:any,Resume:any){
    this.variableholder.JD = JD;
    this.variableholder.Resume = Resume;
    this.router.navigateByUrl('/InterviewScreen')
  }
}
