import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  news;

  fTitle: string = "";
  fPhotoCover: string = "";
  fDescription: string = "";

  constructor() {
    this.news = dataFake;
    const first = this.news[0];
    if (first) {
      this.fTitle = first.title;
      this.fPhotoCover = first.photo;
      this.fDescription = first.description;
    }
  }

}
