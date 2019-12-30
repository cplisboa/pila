import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


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
  public items: any;

  constructor(afDB: AngularFireDatabase) {
    this.items = afDB.list('categoria').valueChanges();
    console.log('Items: ' + this.items);
  }

  salvar() {
    console.log('Salvo');
  }


}
