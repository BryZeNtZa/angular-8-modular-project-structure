import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppFormService } from '@shared/services/app.form.service';
import { AppFormValidators } from '@shared/services/app.form-validators.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';
import { AppAuthService } from '@service/auth/app.auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth.login.component.html',
  styleUrls: ['./auth.login.component.css']
})
export class AuthLoginComponent implements OnInit {

  hidePassword = true;
  loginInProgress = false;
  returnUrl: string;

  public loginForm: FormGroup;
  public formErrors = {
    username: '',
    password: '',
  };


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    public form: FormBuilder,
    public formService: AppFormService,
    public snackbar: AppSnackBarComponent,
    public authService: AppAuthService
  ) {
    translate.setDefaultLang('fr');
  }

  public login() {

    // mark all fields as touched
    this.formService.markFormGroupTouched(this.loginForm);

    if (this.loginForm.valid) {
      this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first()).subscribe(
        data => {
          this.router.navigate([location.origin]);
        },
        error => {
          this.snackbar.error(error);
          this.loginInProgress = false;
        });
    } else {
      this.snackbar.warning('Veuillez renseigner vos paramètres de connexion !');
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, false);
    }
  }

  // build our login form
  public buildLoginForm() {
    this.loginForm = this.form.group({
      username: ['', [Validators.required, AppFormValidators.validateCharacters]],
      password: ['', [Validators.required]],
      // name: ['', [Validators.required, AppFormValidators.validateCharacters]],
      // email: ['', [Validators.required, Validators.email]],
    });

    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.loginForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, true);
    });
  }

  // return all the login form inputs reference
  get f() { return this.loginForm.controls; }

  // initialize component
  ngOnInit() {
    this.buildLoginForm();

  }

  // URL where the user will be redirected after login
  setRedirectURL() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
