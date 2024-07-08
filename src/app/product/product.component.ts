import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { Product } from './product';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

// export interface PeriodicElement {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     id:1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//   }
// ]
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'category'];
  dataSource = new MatTableDataSource<Product>(this.products);;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    // initialization logic goes here
    
    console.log('Component initialized!');
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.dataSource.data = this.products;
      console.log('Response',this.dataSource.data );
    }); 
  }
 
}
