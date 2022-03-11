import { Component, Input, OnInit } from '@angular/core';
import { InfoAnuncio } from 'src/app/interfaces/infoanununcio.interface';



@Component({
  selector: 'app-info-anuncio',
  templateUrl: './info-anuncio.component.html',
  styleUrls: ['./info-anuncio.component.css']
})
export class InfoAnuncioComponent implements OnInit {

  @Input()
  infoAnuncio: InfoAnuncio={
    urlImg: 'https://img10.naventcdn.com/home/RPHOMv4.8.0-RC1/images/help-image-buy.jpg',
    mensajeAnuncio: '¿Qué necesito para comprar?',
    mensajeButton: 'Guía de Compra'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
