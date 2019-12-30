import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public categorias = [{id: 1, nome: 'saude'},
                      {id: 2, nome : 'alimentacao'},
                      {id: 3, nome : 'educacao'} ];

  public selecionada: any;
  public nova = {};

  salvar() {
    console.log('Salvo');
  }


  constructor() {}

}
