import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
  product: Product = new Product();
  constructor(private productService :ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const product = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', product);

      this.productService.getProductById(product).subscribe((res) => {
        this.product = res;
      });
    });
   }
}
