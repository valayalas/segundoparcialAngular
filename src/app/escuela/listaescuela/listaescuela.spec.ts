import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Listaescuela } from './listaescuela';
 
describe('Listaescuela', () => {
  let component: Listaescuela;
  let fixture: ComponentFixture<Listaescuela>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listaescuela],
    }).compileComponents();
 
    fixture = TestBed.createComponent(Listaescuela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});