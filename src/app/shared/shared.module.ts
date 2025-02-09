import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowContainerComponent } from './components/window-container/window-container.component';

@NgModule({
  declarations: [WindowContainerComponent],
  imports: [CommonModule],
  exports: [WindowContainerComponent],
})
export class SharedModule {}
