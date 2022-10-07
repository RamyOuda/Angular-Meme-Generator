import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'library', component: LibraryComponent }]),
  ],
})
export class LibraryModule {}
