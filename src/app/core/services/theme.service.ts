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

  private loadTheme(): void {
    const savedTheme = this.localStorageService.getItem<ThemeEnum>(
      this.themeKey,
      ThemeEnum.LIGHT
    );

    this.applyTheme(savedTheme);
  }

  toggleTheme(): void {
    const currentTheme = document.body.classList.contains(ThemeEnum.DARK)
      ? ThemeEnum.DARK
      : ThemeEnum.LIGHT;
    const newTheme =
      currentTheme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;

    this.applyTheme(newTheme);
  }

  applyTheme(theme: ThemeEnum): void {
    if (!this.availableThemes.includes(theme)) {
      return;
    }

    document.body.classList.remove(...this.availableThemes);
    document.body.classList.add(theme);

    this.localStorageService.setItem(this.themeKey, theme);
  }

  getCurrentTheme(): ThemeEnum {
    return this.localStorageService.getItem<ThemeEnum>(
      this.themeKey,
      ThemeEnum.LIGHT
    );
  }
}
