import { Component, OnInit } from '@angular/core';
import { Project  } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: String;
  
  constructor(
    private _projectService: ProjectService
  ) {
    this.projects = []
    this.url = Global.url;
   }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects
          console.log(this.projects)
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}
