import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatagoloCard } from './catagolo-card';

describe('CatagoloCard', () => {
  let component: CatagoloCard;
  let fixture: ComponentFixture<CatagoloCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoloCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CatagoloCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
