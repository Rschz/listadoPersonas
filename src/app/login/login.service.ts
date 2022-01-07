import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string | null = null;

  constructor(private router: Router) {}

  login(email: string, pwd: string) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          this.token = token;
        });

        this.router.navigate(['/']);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  isLogged() {
    return this.token != null;
  }

  logout() {
    const auth = getAuth();

    auth
      .signOut()
      .then(() => {
        this.token = null;
        this, this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log('Logout error: ' + error);
      });
  }
}
