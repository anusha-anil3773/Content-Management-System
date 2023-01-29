import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  constructor(private user: UserService) {}

  form: FormGroup = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    // adress: new FormControl(''),
    city: new FormControl('',[Validators.required,Validators.minLength(2)]),
    phone:new FormControl('',[Validators.required , Validators.pattern("[0-9 ]{10}")]),
    state:new FormControl('',[Validators.required,Validators.minLength(2)])
  });
  // submitted = false;
  Signup = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
    city: '',
    state: '',
  };
  ngOnInit(): void {}
  hide = true;

  adduser() {
    if (this.form.invalid){
      return;
    }
    else{
      this.user.SignupUser(this.form.value).subscribe((data) => {
        console.log('subscribed in user-signup component', data);
      });
    }
   
  }
}
