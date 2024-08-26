import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: User[] = []; 
  constructor(private userService: UserService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('User init');
      
      this.userService.getUsers().subscribe((res) => {
        this.users = res;
        console.log( this.users);
      })
  }

}
