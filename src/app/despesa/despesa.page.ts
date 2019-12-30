import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.page.html',
  styleUrls: ['./despesa.page.scss'],
})
export class DespesaPage implements OnInit {
   public nome: string;
   public valor: number;

  constructor() { }

  ngOnInit() {
  }

}
