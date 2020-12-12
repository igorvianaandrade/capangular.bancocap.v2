import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Deposito } from 'src/app/model/deposito.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {  
  rotaNovoDeposito:string = '/depositos-sview';
  submitted = false;

  deposito: Deposito ={
    data: '',
    valor: 0,    
    conta: {
      hash: '4d73157b6a4d824733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'IGOR',
        cpf:'784.125.456-88'
      },
      saldo:100000
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.submitted = true;
    
  } 

}