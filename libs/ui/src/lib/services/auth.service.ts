import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import jwt_decode from 'jwt-decode';

export interface AuthData {
  login: string;
  exp: number;
  iat: number;
  sub: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authData!: AuthData;

  constructor(private http: HttpClient) {}
  async login(userName: string, password: string) {
    this.authData = await firstValueFrom(
      this.http
        .post<AuthData>('http://localhost:3000/api/auth/login', {
          username: userName,
          password: password,
        })
        .pipe(map((data: any) => jwt_decode(data.accessToken)))
    );

    return this.authData;
  }

  getAuthData(): AuthData {
    return this.authData;
  }
}
