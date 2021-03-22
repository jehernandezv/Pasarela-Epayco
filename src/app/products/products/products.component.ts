import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';

declare let ePayco: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [{
    ref: 'Epson L380',
    detail: 'Copiadora, escaner, impresora, fotocopiadora.',
    price: '59900',
    img: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bfef.png'
  },
    {
      ref: 'Portátil ACER Porsche AP714',
      detail: 'Dispositivo para edición profesional',
      price: '69990',
      img: 'http://assets.stickpng.com/thumbs/5885250f6f293bbfae451a33.png'
    },
    {
      ref: 'Portatil HP 15-da2035la',
      detail: 'Producto ideal para educación',
      price: '159900',
      img: 'http://assets.stickpng.com/thumbs/588524c66f293bbfae451a2f.png'
    },
    {
      ref: 'Cámara LENOVO VOIP 360 Grados',
      detail: 'Seguridad de casa',
      price: '121990',
      img: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c00f.png'
    }];

  private handler: any;

  constructor() {
    this.handler = ePayco.checkout.configure({
      key: 'af9c299e0514da31fa797d105e62b2ff',
      test: true
    });
  }

  ngOnInit(): void {

  }

  buyProduct(product: Product): void {
    const data = {
      //Parametros compra (obligatorio)
      name: product.ref,
      description: product.detail,
      invoice: Math.floor(Math.random() * 101),
      currency: 'cop',
      amount: product.price,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      //Onpage="false" - Standard="true"
      external: 'true',


      //Atributos opcionales
      confirmation: 'http://localhost:4200/',
      response: 'http://localhost:4200/',

      //Atributos cliente
      name_billing: 'Jhonn Hernandez Vega',
      address_billing: 'Carrera 1-33 Páez Boyaca',
      type_doc_billing: 'cc',
      mobilephone_billing: '3208893911',
      number_doc_billing: '1057436705'
    };
    this.handler.open(data);
  }

}
