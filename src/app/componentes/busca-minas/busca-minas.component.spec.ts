import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMinasComponent } from './busca-minas.component';

describe('BuscaMinasComponent', () => {
  let component: BuscaMinasComponent;
  let fixture: ComponentFixture<BuscaMinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaMinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
