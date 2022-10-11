import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { RouterModule } from '@angular/router';
import { MemeModule } from '../meme/meme.module';

@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule,
    MemeModule,
    RouterModule.forChild([{ path: 'library', component: LibraryComponent }]),
  ],
})
export class LibraryModule {}
