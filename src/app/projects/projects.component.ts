import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ApiService]
})
export class ProjectsComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

  onget()
  {
    this.apiservice.giveresponse().subscribe((response) => console.log(response),
      (error)=>console.log(error));
  }
}
