import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
product = new Product();
  constructor(
    private productService: ProductService
  ){}
  onSubmit(): void {
    this.productService.addProduct(this.product).subscribe((data)=>{
      console.log(data);
    })
  }

}
