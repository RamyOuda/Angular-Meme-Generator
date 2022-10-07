import { Component, OnInit } from '@angular/core';
import { IMeme } from '../imeme';
import { LocalService } from '../local.service';

@Component({
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private localStore: LocalService) {}

  ngOnInit(): void {
    this.memesFromLocal = this.localStore.getData('memes');
    this.memes = JSON.parse(this.memesFromLocal);
  }

  memesFromLocal: any;
  memes!: IMeme[];

  clearLocalStorage(): void {
    this.localStore.removeData('memes');
  }
}
