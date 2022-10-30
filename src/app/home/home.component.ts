import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProduct : undefined | product[]
  trendyProducts: undefined | product[]

  constructor(private product: ProductService) { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`); 

  ngOnInit(): void {
    this.product.popularProduct().subscribe((result) => {
      this.popularProduct = result
    })

    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data
    })
  }

}
