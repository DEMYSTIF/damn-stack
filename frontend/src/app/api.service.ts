import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  BACKEND_URL = "http://localhost:4000";

  public createUser(user: User) {
    return this.httpClient.post<User>(`${this.BACKEND_URL}/user`, user);
  }

  public fetchUsers() {
    return this.httpClient.get<User[]>(`${this.BACKEND_URL}/user`);
  }

  public updateUser(user: User) {
    return this.httpClient.put<User>(`${this.BACKEND_URL}/user/update/${user._id}`, user);
  }

  public deleteUser(_id: string) {
    return this.httpClient.delete<User>(`${this.BACKEND_URL}/user/delete/${_id}`)
  }
}
