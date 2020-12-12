import { Component, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']  
})
export class ClienteComponent implements OnInit {

  rotaNovoCliente:string = '/clientes-view';

  //TODO:  @Output novoCliente 
  cliente: Cliente = {
    nome: '',
    cpf: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  submitted = false;
  
  onSubmit() { this.submitted = true;     
  } 

  criarCliente(): void {
    alert("Cliente criado com sucesso!");
  }
}
