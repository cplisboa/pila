import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DespesaPage } from './despesa.page';

describe('DespesaPage', () => {
  let component: DespesaPage;
  let fixture: ComponentFixture<DespesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
