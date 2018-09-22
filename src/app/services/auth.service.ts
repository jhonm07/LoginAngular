import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";
@Injectable()
export class AuthService{
    token:string;
    constructor(private router:Router){}
    singutService(xxx:string, yyy: string ){
        firebase.auth().createUserWithEmailAndPassword(xxx,yyy).catch(error =>console.log(error));

    }
    singinService(xxx:string, yyy: string ){
        console.log("Hollaaa")
    firebase.auth().signInWithEmailAndPassword(xxx,yyy).then(response =>{firebase.auth().currentUser.getIdToken().then(
        (token:string)=>{this.token=token;
        console.log(this.token)}
    )

        //this.router.navigate['']
    })    
    }
}