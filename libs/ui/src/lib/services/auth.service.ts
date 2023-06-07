import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

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
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  async login(userName: string, password: string) {
    const accessToken = await firstValueFrom(
      this.http
        .post<string>('http://localhost:3000/api/auth/login', {
          username: userName,
          password: password,
        }).pipe(map((data: any) => data.accessToken))
    );

    this.cookieService.set("ACCESS_TOKEN", accessToken)
    return this.getAuthData();
  }

  logout() {
    this.cookieService.delete("ACCESS_TOKEN");
  }

  getAuthData(): AuthData | null {
    const authData: AuthData = jwt_decode<AuthData>(this.cookieService.get("ACCESS_TOKEN"));
    if (authData.exp < Date.now() / 1000) {
      return null;
    }

    return authData;
  }

  getUserId(): number {
    const authData = this.getAuthData();
    if (authData) {
      return authData.sub;
    }

    return 0;
  }
}
