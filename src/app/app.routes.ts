import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product/product-view/product-view.component'; 
import { CategoryComponent } from './product/category/category.component';
import { CategoryViewComponent } from './product/category/category-view/category-view.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddProductComponent } from './product/add-product/add-product.component';


export const routes: Routes = [
    { path: 'product', component: ProductComponent },
    { path: 'product/:id', component: ProductViewComponent }, 
    { path: 'category', component: CategoryComponent }, 
    { path: 'category/:name', component: CategoryViewComponent }, 
    { path: 'users', component: UsersComponent }, 
    { path: 'user/:id', component: UserProfileComponent }, 
    { path: 'users/add/newuser', component: AddUserComponent }, 
    { path: 'product/add/new', component: AddProductComponent }, 
];
