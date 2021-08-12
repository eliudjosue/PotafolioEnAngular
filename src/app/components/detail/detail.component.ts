import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit { 

  public project: Project[];
  public url: string;
  public showProject: any;
  public confirm: boolean;
 
  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.project = [];
    this.url = Global.url; 
    this.confirm = false;
   

   };

  ngOnInit(): void {
    this._route.params.subscribe(params => {

      let id = params.id;

      this.getProject(id);
    });
  }

  setConfirm(confirm:boolean){
    this.confirm = confirm
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response => {
      
          this.showProject = response.project;
          console.log(this.project)
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        if(this.showProject){
          this._router.navigate(['/proyectos']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

} 
