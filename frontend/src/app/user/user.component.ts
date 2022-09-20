import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { User } from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'name', 'title', 'email', 'phone', 'actions'];
  dataSource: User[] = [];
  user: User = {};
  constructor(private apiService: ApiService) { }

  fetchUsers() {
    this.apiService.fetchUsers().subscribe((result) => {
      this.dataSource = result;
    })
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  selectUser(user: User) {
    this.user = user;
  }

  newUser() {
    this.user = {};
  }

  createUser(f: any) {
    this.apiService.createUser(f.value).subscribe((result) => {
      console.log(result);
    })
    alert("User " + f.value.name + " is created!");
    this.fetchUsers();
  }

  deleteUser(_id: string) {
    let ok = confirm("Are you sure about this?");
    if (ok) {
      this.apiService.deleteUser(_id).subscribe((result) => {
        console.log(result);
      })
      alert("User ID: " + _id + " is deleted!");
      this.fetchUsers(); 
    }
  }

  updateUser(f: any) {
    f.value._id = this.user['_id'];
    this.apiService.updateUser(f.value).subscribe((result) => {
      console.log(result);
    })
    alert("User ID: " + f.value._id + " is updated!")
    this.newUser();
  }

}
