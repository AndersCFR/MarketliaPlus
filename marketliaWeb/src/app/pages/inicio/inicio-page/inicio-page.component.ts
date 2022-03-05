import { Component, OnInit } from '@angular/core';
import { InfoAnuncio } from 'src/app/interfaces/infoanununcio.interface';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent implements OnInit {

  infoAnuncios: InfoAnuncio[]=[
    {
      urlImg:'https://img10.naventcdn.com/home/RPHOMv4.8.0-RC1/images/help-image-buy.jpg',
      mensajeAnuncio: '¿Qué necesito para comprar?',
      mensajeButton: 'Guía de Compra'
    },
    {
      urlImg: 'https://img10.naventcdn.com/home/RPHOMv4.8.0-RC1/images/help-image-rent.jpg',
      mensajeAnuncio: '¿Qué necesito para alquilar?',
      mensajeButton: 'Guía de Compra'
    },
    {
      urlImg: 'https://img10.naventcdn.com/home/RPHOMv4.8.0-RC1/images/help-image-sell.jpg',
      mensajeAnuncio: '¿Qué necesito para vender?',
      mensajeButton: 'Guía de Compra'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
