import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableholderService {
JD:String;
  Resume:String;
  Conversation:String;
  Candidate:String;
  constructor() { 
    this.JD = '';
    this.Resume = '';
    this.Conversation = '';
    this.Candidate = '';
  }
}
