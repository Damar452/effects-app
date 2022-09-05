import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:  string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  public getUsers(){
   return this.http.get(`${this.url}/users?per_page=6`)
          .pipe(
            map( resp => resp['data'])
          );
  }
}