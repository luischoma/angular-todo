import { Injectable } from '@angular/core';

import { ThemeEnum } from '../enums/theme.enum';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'app-theme';
  private readonly availableThemes = [ThemeEnum.LIGHT, ThemeEnum.DARK];

  constructor(private localStorageService: LocalStorageService) {
    this.loadTheme();
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme =
      currentTheme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;

    this.applyTheme(newTheme);
  }

  private applyTheme(theme: ThemeEnum): void {
    if (!this.availableThemes.includes(theme)) {
      return;
    }

    const htmlElement = document.documentElement;
    htmlElement.classList.remove(...this.availableThemes);
    htmlElement.classList.add(theme);

    this.localStorageService.setItem(this.themeKey, theme);
  }

  getCurrentTheme(): ThemeEnum {
    return this.localStorageService.getItem<ThemeEnum>(
      this.themeKey,
      ThemeEnum.LIGHT
    );
  }

  private loadTheme(): void {
    const savedTheme = this.getCurrentTheme();
    this.applyTheme(savedTheme);
  }
}
