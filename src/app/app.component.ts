import { Component, OnInit } from '@angular/core';
import { VentasServiceService } from './ventas-service.service.js';
import { ProductosModel } from './productos-model.model.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Toteat';


  public listVentas: any[] = [];
  public listProductos: ProductosModel[] = [];
  public listPayments: any[] = [];
  constructor(private _serviceVentas: VentasServiceService) { }
  ngOnInit() {

    this.getVentasTotales();


  }

  //Metodo encargado de obtener todos los datos y mostrarlos en el Front-end
  getVentasTotales() {
    this._serviceVentas.getVentas().subscribe(
      data => {
        this.listVentas = data;
        for (let i = 0; i < this.listVentas.length; i++) {
          this.listVentas[i].total = data[i].total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
      },
      err => { console.log(err) }
    )

  }



}
