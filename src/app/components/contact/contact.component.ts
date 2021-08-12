import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider : number;
  public anchuraToSlider : any;
  public autor : any;
  @ViewChild('textos', {static: true}) textos:any;
  constructor() { 
    this.widthSlider = 0;
    this.anchuraToSlider = 0;
    this.autor = '';
    
  }

  ngOnInit(): void {
    alert(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider
  }

  resetearSlider(){
    this.anchuraToSlider = false
  }

  getAutor(event:any){
    this.autor = event;
    console.log(event)
  }
  

}
