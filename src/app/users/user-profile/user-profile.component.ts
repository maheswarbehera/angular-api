import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  user: User | undefined;  
  constructor(private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('user profile init');
this.route.params.subscribe(params=>{
const userId = params['id']
  
  this.userService.getUserById(userId).subscribe((res) => {
    this.user= res;
    console.log(this.user);
  })
})
  }

}
