import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private outservice : AuthService ) { }

  ngOnInit() {
  }
onSubmit(myform:NgForm){
const qqq = myform.value.email
const www = myform.value.passwd

this.outservice.singutService(qqq,www);

}
}
