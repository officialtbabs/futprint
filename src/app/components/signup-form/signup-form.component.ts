import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/services/signup/sign-up.service';
import { NgForm } from '@angular/forms';
import { signUpData } from 'src/app/mockSignUpData';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers: [SignUpService]
})
export class SignupFormComponent implements OnInit {
  title: string = "Sign Up";

  constructor(public signUpService: SignUpService) { }

  ngOnInit(): void {
  }



  onSubmit(form: NgForm) {
    // this.signUpService.postSignUpDetails(form).subscribe(data => {
      
    // });
  }
}
