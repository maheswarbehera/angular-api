import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrl = 'https://fakestoreapi.com/'

  getUsers() {
    return this.http.get<User[]>(this.apiUrl + 'users')
  }

  getUserById(id:number){
   return this.http.get<User>(this.apiUrl + `users/${id}`)
  }

  getUserLimit(limit: number) {
    return this.http.get<User[]>(this.apiUrl + `users?limit=${limit}`)
  }

  sort(sort: string){
    return this.http.get<User[]>(this.apiUrl + `users?sort=${sort}`)
  }

  addUser() {
    // return this.http.post(this.apiUrl + 'users')
  }
}
