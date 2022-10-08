import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: product){
    return this.http.post('http://localhost:3000/products', data)
  }

  productList(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }

  deleteProduct(id: Number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getProductById(id:string){
    return this.http.get(`http://localhost:3000/products/${id}`)
  }

  updateProduct(data: product){
    return this.http.put(`http://localhost:3000/products/${data.id}`, data)
  }
}
