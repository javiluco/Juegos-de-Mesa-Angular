import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Estrategia } from './estrategia';

describe('Estrategia', () => {
  let component: Estrategia;
  let fixture: ComponentFixture<Estrategia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estrategia],
    }).compileComponents();

    fixture = TestBed.createComponent(Estrategia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
