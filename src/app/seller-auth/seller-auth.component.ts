import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router) {}
  showLogin = false;
  authError : String = ''
  ngOnInit():void{
    this.seller.reloadSeller()
  }

  //calling seller signup service 
  signUp(data: Signup) : void{
    this.seller.userSignup(data)
  }

  //calling seller login service
  Login(data: Signup) : void{
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=> {
      if(isError){
        this.authError = 'User email or password is incorrect!'
      }
    })
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignUp(){
    this.showLogin = false;
  }

}
