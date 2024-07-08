import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Category } from '../category';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-category-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.css'
})
export class CategoryViewComponent implements OnInit{
  category: Category = new Category();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    console.log('catagory init');

    this.route.params.subscribe(params => {
      const category = params['name']; 
      console.log('cat name:', category);

    // const category = "electronics";
    this.productService.getCategoryByName(category).subscribe((res) => {
      this.category = res;
      console.log(this.category);
    })
    })
  }

}
