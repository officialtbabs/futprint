import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpDetails } from './sign-up-details.model';
import { signUpData } from '../../mockSignUpData';
import { NgForm } from '@angular/forms';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'applcation/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private apiUrl = "https://localhost:5000/signUpData";
 
  constructor(private http:HttpClient) { }

  selectedDetails: SignUpDetails = { 
    _id: 0,
    firstname: "",
    lastname: "",
    businessName: "",
    dateOfEstablishment: "",
    email: ""
  };
  details: SignUpDetails[] = [];

  // postSignUpDetails(form: NgForm): Observable<SignUpDetails>{
  //   const url = this.apiUrl
  //   // return this.http.post(url, form, httpOptions);
  // }

  // getSignUpDetails(): SignUpDetails[]{

  // }
}