import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | null {
    if (!this.user) return null;
    return structuredClone(this.user);
  }

  login(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', user.id.toString())),
      )
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    const token = localStorage.getItem('token');
    console.log("checking authentication");
    //console.log(`${this.baseUrl}/users/` + token);
    return this.http.get<User>(`${this.baseUrl}/users/` + '1')
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(user => of(false))
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }

}

