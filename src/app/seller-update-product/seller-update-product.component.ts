import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData : undefined | any 

  constructor(private route: ActivatedRoute, private product: ProductService) { }
  

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.getProductById(productId).subscribe((result) => {
      this.productData = result
      console.log(this.productData)
    })
  }

  submit(data: product){
    if(this.productData){
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result) => {
       alert('Product Updated Successfully')
    })
  }

}
