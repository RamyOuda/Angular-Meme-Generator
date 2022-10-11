import { Component, OnInit } from '@angular/core';
import { IMeme } from '../meme/imeme';
import { MemeService } from '../meme/meme.service';

@Component({
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private memeService: MemeService) {}

  ngOnInit(): void {
    this.memeService.getMemes();
    this.memesFromLocal = this.memeService.memeList;
    this.memes = JSON.parse(this.memesFromLocal);
  }

  memesFromLocal: any;
  memes!: IMeme[];

  clearLocalStorage(): void {
    this.memeService.restoreToDefault();
  }

  removeMeme(): void {
    this.memeService.removeMeme();
  }
}
