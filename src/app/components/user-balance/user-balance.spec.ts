import { TestBed, async } from '@angular/core/testing';
import { UserBalanceComponent } from './user-balance.component';
import { NumberToFix } from '../../pipes/number-to-fix';

describe('User Balance Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserBalanceComponent,
        NumberToFix,
      ],
    }).compileComponents();
  }));
  it('should create the component (health)', async(() => {
    const fixture = TestBed.createComponent(UserBalanceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render the current balance in a row', async(() => {
    const fixture = TestBed.createComponent(UserBalanceComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#container')).toHaveClass('row');
    expect(compiled.querySelector('div').textContent).toContain('Current balance');
  }));
  it('should render the balance with the numberToFix pipe', async(() => {
    const fixture = TestBed.createComponent(UserBalanceComponent);
    fixture.debugElement.componentInstance.userBalance = 2799.932141
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#balance').textContent).toContain('2799.932 Ethers');
  }));
});