import { Component, OnInit } from '@angular/core';
import { IMeme } from '../meme/imeme';
import { LocalService } from '../local.service';
import { MemeService } from '../meme/meme.service';

@Component({
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private memeService: MemeService) {}

  ngOnInit(): void {
    this.memes = JSON.parse(this.memesFromLocal);
  }

  memesFromLocal: any = this.memeService.memeList;
  memes!: IMeme[];

  clearLocalStorage(): void {
    this.memeService.restoreToDefault();
  }
}
