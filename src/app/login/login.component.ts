import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../shared/services/auth.service';
import { WebRequestService } from '../shared/services/web-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  message: string;
  constructor(private webService: WebRequestService,
    private authService: AuthService,
    private router: Router) { }

  public loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.webService.get("users").subscribe((users: User[]) => {
      let index = users.findIndex(user => user.email === this.loginForm.value.email);
      if (index === -1) {
        this.error = "User not found with this mail address";
        return;
      } else {
        if (users[index].password === this.loginForm.value.password) {
          this.error = "";
          this.message = "User logged in successfully!!";
          setTimeout(() => {
            this.authService.setLogged();
            this.router.navigate(["dashboard"]);
          }, 2000)
        } else {
          this.error = "Please check your email & password";
          return;
        }
      }
    })
  }
}
