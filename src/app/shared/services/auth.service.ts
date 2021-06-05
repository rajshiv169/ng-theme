import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem("isLoggedIn") == "true" ? true : false);
  constructor(private webService: WebRequestService,
    private http: HttpClient,
    private router: Router) { }

  signup(name: string, email: string, password: string) {
    return this.webService.post( "users", {name, email, password}).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log("Successfully signed up and now logged in!");
        if(res) {
          this.setLogged()
        }
      })
    )
  }

  setLogged() {
    localStorage.setItem("isLoggedIn", "true");
    this.isLoggedIn.next(true);
  }

  removeLogged() {
    localStorage.removeItem("isLoggedIn");
  }

  logout(){
    this.removeLogged();
    this.isLoggedIn.next(false);
    this.router.navigate(["/"]);
  }
}
