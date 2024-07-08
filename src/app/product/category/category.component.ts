import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{

  categories: Category [] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log('category init');
    this.productService.getAllCategories().subscribe((res) => {
      this.categories = res;
      console.log( this.categories);
    },
  );
  }

}
