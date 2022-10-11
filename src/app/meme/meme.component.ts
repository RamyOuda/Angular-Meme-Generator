import { Component, OnInit } from '@angular/core';
import { IMeme } from './imeme';
import { MemeService } from './meme.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css'],
})
export class MemeComponent implements OnInit {
  constructor(private memeService: MemeService) {}

  ngOnInit(): void {
    this.memeService.getMemes();
    this.memesFromLocal = this.memeService.memeList;
    this.memes = JSON.parse(this.memesFromLocal);
  }

  memesFromLocal: any;
  memes!: IMeme[];
}
