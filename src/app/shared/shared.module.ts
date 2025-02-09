import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { WindowContainerComponent } from './components/window-container/window-container.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { SunCycleComponent } from './components/sun-cycle/sun-cycle.component';

@NgModule({
  declarations: [
    WindowContainerComponent,
    ThemeToggleComponent,
    SunCycleComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [WindowContainerComponent, ThemeToggleComponent, SunCycleComponent],
})
export class SharedModule {}
