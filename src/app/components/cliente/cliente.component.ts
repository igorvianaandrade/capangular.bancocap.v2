import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
  
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  criarCliente(): void {
    alert("Cliente criado com sucesso!");
    console.log(this.cliente);
  }

  isCPF(): boolean{
    return this.cliente.cpf == null ? true : this.cliente.cpf.length < 12 ? true : false;
 }

  getCpfCnpjMask(): string{
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
 }

}
