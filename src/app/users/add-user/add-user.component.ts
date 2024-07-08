import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent{

newUser: User = {
  address: {
    geolocation: {
      lat: '',
      long: ''
    },
    city: '',
    street: '',
    number: 0,
    zipcode: ''
  },
  id: 0,
  email: '',
  username: '',
  password: '',
  name: {
    firstname: '',
    lastname: ''
  },
  phone: '',
  __v: 0
};
  onSubmit(): void {
    // this.
     console.log('New user', this.newUser);

    //  this.newUser = { id: 0, name: '', email: '' };
  }

}
