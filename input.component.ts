import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ConfigureService } from '../configure.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  password:any
  constructor(private fb: FormBuilder, public router: Router,) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }

}