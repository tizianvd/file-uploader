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

  authData?: AuthData;

  constructor(private authService: AuthService){

  }

  async login() {
    this.authData = await this.authService.login(this.username, this.password);
  }

  ngOnInit(): void {
      this.authData = this.authService.getAuthData();
  }
}
