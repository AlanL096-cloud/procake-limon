import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto [] = [];
  producto = new Producto();

  constructor(private ProductoService:ProductoService) { }

  ngOnInit(): void {

    this.ProductoService.getProductos().subscribe(data => {
      this.productos =data.map(e => { 
        return{
          ...e.payload.doc.data() as Producto,
          id : e.payload.doc.id,
        };
        
      })
    })
  }

  agregarProducto(){
    this.ProductoService.createProducto(this.producto);
    this.producto =new Producto();
  }

  selectProducto(producto:Producto){
    this.producto = producto;
  }

  updateProducto(){
    this.ProductoService.updateProducto(this.producto);
    this.producto = new Producto;
  }

  deleteProducto(id:string){
    this.ProductoService.deleteProducto(id);
    this.producto =new Producto();
  }

}
