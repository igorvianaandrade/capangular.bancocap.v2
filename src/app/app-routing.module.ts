import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContaComponent } from './components/conta/conta.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { HomeComponent } from './components/home/home.component';
import { SaqueComponent } from './components/saque/saque.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes",
    component: ClienteComponent
  },
  {
    path: "contas",
    component: ContaComponent
  },
  {
    path: "clientes-view",
    component: ClienteViewComponent
  },
  {
    path: "depositos",
    component: DepositoComponent
  },
  {
    path: "saques",
    component: SaqueComponent
  },
  {
    path: "transferencias",
    component: TransferenciaComponent
  },
  {
    path: "extratos",
    component: ExtratoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
