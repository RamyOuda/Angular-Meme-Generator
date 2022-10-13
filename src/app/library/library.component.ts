import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMeme } from '../meme/imeme';
import { MemeService } from '../meme/meme.service';

@Component({
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private memeService: MemeService, private router: Router) {}

  ngOnInit(): void {
    this.memeService.getMemes();
    this.memesFromLocal = this.memeService.memeList;
    this.memes = JSON.parse(this.memesFromLocal);
  }

  memesFromLocal: any;
  memes!: IMeme[];

  clearLocalStorage(): void {
    if (
      confirm('Are you sure you want to delete all memes from the library?')
    ) {
      this.memeService.restoreToDefault();
      this.router.navigate(['/home']);
    }
  }

  removeMeme(): void {
    this.memeService.removeMeme();
  }
}
