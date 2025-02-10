import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeToggleComponent } from './theme-toggle.component';
import { ThemeService } from '../../../core/services/theme.service';
import { By } from '@angular/platform-browser';

describe('ThemeToggleComponent', () => {
  let component: ThemeToggleComponent;
  let fixture: ComponentFixture<ThemeToggleComponent>;
  let themeServiceSpy: jasmine.SpyObj<ThemeService>;

  beforeEach(async () => {
    themeServiceSpy = jasmine.createSpyObj('ThemeService', ['toggleTheme']);

    await TestBed.configureTestingModule({
      declarations: [ThemeToggleComponent],
      providers: [{ provide: ThemeService, useValue: themeServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleTheme() on button click', () => {
    const button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click', null);
    expect(themeServiceSpy.toggleTheme).toHaveBeenCalled();
  });
});
