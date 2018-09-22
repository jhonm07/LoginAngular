import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-singout',
  templateUrl: './singout.component.html',
  styleUrls: ['./singout.component.css']
})
export class SingoutComponent implements OnInit {

  constructor(private outservice: AuthService) { }

  ngOnInit() {
  }
  onSubmit(myform:NgForm){
    const sss = myform.value.email
const fff = myform.value.passwd

this.outservice.singinService(sss,fff);

  }
}
