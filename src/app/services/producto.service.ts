import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../pages/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private firestore:AngularFirestore) { }



  createProducto(producto:Producto){
    return this.firestore.collection('productos').add(Object.assign({},producto));
  }

  getProductos(){
    return this.firestore.collection('productos').snapshotChanges();
  }

  updateProducto(producto:Producto){
    return this.firestore.doc('productos/'+producto.id).update(producto);
  }

  deleteProducto(productoId:string){
    this.firestore.doc('productos/'+productoId).delete();
  }
}


