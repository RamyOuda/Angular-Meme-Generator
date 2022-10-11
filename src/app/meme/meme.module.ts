import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeComponent } from './meme.component';

@NgModule({
  declarations: [MemeComponent],
  imports: [CommonModule],
  exports: [MemeComponent],
})
export class MemeModule {}
