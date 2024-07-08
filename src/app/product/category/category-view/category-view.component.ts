import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../product';
import { Category } from '../category';

@Component({
  selector: 'app-category-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.css'
})
export class CategoryViewComponent implements OnInit{
  category: string = '';
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    console.log('catagory init');

    this.route.params.subscribe(params => {
      this.category = params['name']; 
      console.log('cat name:', this.category);

    // const category = "electronics";
    this.productService.getProductsByCategory(this.category).subscribe((res) => {
      this.products = res;
      console.log(this.products);
    })
    })
  }

}
