import { Component, OnInit } from '@angular/core';
import { AuthData, AuthService } from '../../services/auth.service';

@Component({
  selector: 'file-uploader-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = "test";
  password = "test";

  authData?: AuthData | null;

  constructor(private authService: AuthService){

  }

  async login() {
    this.authData = await this.authService.login(this.username, this.password);
  }

  async logout() {
    this.authService.logout()
    this.authData = null;
  }

  ngOnInit(): void {
    this.authData = this.authService.getAuthData();
  }
}
