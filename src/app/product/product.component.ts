import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { Product } from './product';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'; 
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatPaginatorModule, ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{ 
  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'category'];
  dataSource = new MatTableDataSource<Product>();
  products: Product[] = []
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    // initialization logic goes here
    
    console.log('Component initialized!');
    this.productService.getProducts().subscribe((res) => {
      this.dataSource.data = res; 
      console.log('Response', this.dataSource.data );
    }); 

    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
}


