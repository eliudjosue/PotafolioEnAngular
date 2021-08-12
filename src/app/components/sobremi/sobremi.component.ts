import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public web : String;
  constructor() {
    this.title = "Eliud Campos";
    this.subtitle = "Desarrollador web";
    this.web = "eliudcamposweb.ar"
   }

  ngOnInit(): void {
  }

}
