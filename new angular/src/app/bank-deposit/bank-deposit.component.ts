import { Component, OnInit } from '@angular/core';
import { Wallet, HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank-deposit',
  templateUrl: './bank-deposit.component.html',
  styleUrls: ['./bank-deposit.component.css']
})
export class BankDepositComponent implements OnInit {

  user:String;
  amount:'';
  password:'';
  wallet:Wallet;
  Message:any;
  
  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private httpClient:HttpClient,
    private service : HttpClientService) { }

  ngOnInit(): void {
  }

  depositNow(){
     
    this.user = sessionStorage.getItem('username');
    this.loginservice.getWalletDetail(this.user).subscribe((data)=>this.wallet=data);

    if (this.wallet.walletPin === this.password)
    {
      this.service.depositbal(this.user,this.amount).subscribe((data)=>this.Message=data);
    }
    alert("Balance added to your Bank Account");
    this.router.navigate(['home'])
  }

  gotoHome(){
    this.router.navigate(['home'])
  }
}
 