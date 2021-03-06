import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { BankDepositComponent } from './bank-deposit/bank-deposit.component';
import { BankWithdrawComponent } from './bank-withdraw/bank-withdraw.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';


const routes: Routes = [
  {path :"",component:LoginComponent},
  {path:"home",component:DashBoardComponent},
  {path:"createNewUser", component:SignupComponent },
  {path:"fundTransfer",component:FundTransferComponent},  
  {path:"BankDeposit", component:BankDepositComponent},
  {path :"addBalanceToWallet",component:BankWithdrawComponent},
  {path:"login",component:LoginComponent},
  {path:"logout", component:LogoutComponent },
  {path:"showTransaction",component:TransactionHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
