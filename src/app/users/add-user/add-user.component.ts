import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent{
 

  constructor(private userService: UserService) { }
newUser = new User();

  onSubmit(): void {
    this.userService.addUser(this.newUser).subscribe(data => {
      console.log('New user', data);      
    });
  }

}
