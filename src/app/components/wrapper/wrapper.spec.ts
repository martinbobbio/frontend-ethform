import { TestBed, async } from '@angular/core/testing';
import { WrapperComponent } from './wrapper.component';

describe('Wrapper Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
    }).compileComponents();
  }));
  it('should create the component (health)', async(() => {
    const fixture = TestBed.createComponent(WrapperComponent);
    const app = fixture.debugElement.componentInstance;
    app.title = "title example"
    expect(app).toBeTruthy();
  }));
  it('should render the title prop of the component', async(() => {
    const fixture = TestBed.createComponent(WrapperComponent);
    fixture.debugElement.componentInstance.title = "title example"
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('title example');
  }));
});