import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $:any

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Output() conseguirAutor = new EventEmitter;

  public autor : any;

  constructor() {
    this.anchura = 0;
    this.autor = {
      nombre:"eliud Campos",
      Website:"eliudcamposweb",
      Youtube:"eliudcamposweb"
    }
   }

  ngOnInit(): void {
    $("#logo").click(function(e:any){
      e.preventDefault();
      $("header").css("background", "green")
                 .css("height","90px");
    });
    
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
    });
  }

  lanzar(event:any){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
