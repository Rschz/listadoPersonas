import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Personas-App';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyAsOp2D6yv0VTpOfhOeTCZqkhdKEQZSPpY',
      authDomain: 'listadopersonas-cefbc.firebaseapp.com',
    };

    const app = initializeApp(firebaseConfig);
  }

  isLogged() {
    return this.loginService.isLogged();
  }

  logout() {
    this.loginService.logout();
  }
}
