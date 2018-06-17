import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'app-exercise-reactive',
  templateUrl: './exercise-reactive.component.html',
  styleUrls: ['./exercise-reactive.component.css']
})
export class ExerciseReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword : ['', Validators.required, PasswordValidators.validOldPassword],
      newPassword : ['', Validators.required],
      confirmPassword : ['', Validators.required],
    }, {
      validator: PasswordValidators.passwordShouldMatch
    });
  }

  ngOnInit() {
  }

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
}
