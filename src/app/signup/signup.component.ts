import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../shared/services/auth.service';
import { WebRequestService } from '../shared/services/web-request.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  name = new FormControl("", Validators.required);
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required, Validators.minLength(8)]);
  passwordConfirm = new FormControl('', [Validators.required, Validators.minLength(8)]);

  message: string;
  error: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private webService: WebRequestService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
    }, {
      validator: this.passwordMatchValidator
    })
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    // let found = true;
    this.webService.get("users").subscribe((users: User[]) => {
      let found = users.some(user => user.email == this.signupForm.value.email)
      if(!found) {
        this.authService.signup(this.signupForm.value.name,
          this.signupForm.value.email,
          this.signupForm.value.password).subscribe((res: HttpResponse<any>) => {
            console.log(res)
            if(res) {
              this.message = "Successfully signed up!!!"
              this.error = "";
              setTimeout(() => {
                this.router.navigate(["dashboard"])
              }, 2000)
            }
          })
      } else {
        this.message = "Email already exists!!!"
        this.error = "";
      }
    })
  }

}
