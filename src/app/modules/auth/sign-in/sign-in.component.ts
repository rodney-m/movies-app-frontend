import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm! : FormGroup;
  loading = false;

  @ViewChild('container') container! : ElementRef;

  // the following code changes the active pane
  signUp(){
    this.container.nativeElement.classList.add('right-panel-active');
  }
  signIn(){
    this.container.nativeElement.classList.remove('right-panel-active');
  }


  constructor(
    private authService : AuthenticationService,
    private fb : FormBuilder,
    private toastr: ToastrService,
    private tokenService : TokenService,
    private router: Router
    ){}

  ngOnInit(): void {
      this.initializeForm();
  }


  initializeForm(){
    this.signInForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  toggleLoading(){
    this.loading = !this.loading
  }

  submitSignIn(){
    if(this.signInForm.invalid){
      return;
    }
    this.toggleLoading()
    this.authService.login(this.signInForm.value).subscribe({
      next: (res : any) =>{
        this.tokenService.setToken(res.data.token);
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.toastr.error('Error', err.error.message);
      },
      complete: () => {
        this.toggleLoading()
      }
    })
  }
}
