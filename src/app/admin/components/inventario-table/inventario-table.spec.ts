import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioTable } from './inventario-table';

describe('InventarioTable', () => {
  let component: InventarioTable;
  let fixture: ComponentFixture<InventarioTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioTable],
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
