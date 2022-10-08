import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList : undefined | product[] 
  icon=faTrash
  

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      console.log('result: ',result)
      this.productList = result
    })
    console.log('productList: ', this.productList)
  }

  deleteProduct(id: Number){
    this.product.deleteProduct(id).subscribe((result) => {
      if(result){
        this.productList = this.productList?.filter((item) => {
          if(item.id == id){
            return
          }else return item
        })
      }
    })
  }

}
