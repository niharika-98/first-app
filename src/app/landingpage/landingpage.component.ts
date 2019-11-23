import { Component, OnInit } from '@angular/core';
import  { LandingpageService } from './landingpage.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private landpageservice:LandingpageService) { }
private users:any[];
  ngOnInit() {
   this.getSubjects();
  }
  getSubjects(){
    this.landpageservice.findSubjects().subscribe(data=>{
        this.users=data;
    })

  }
  search(){
    MDBBootstrapModule.forRoot()
  }

}
