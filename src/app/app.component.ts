import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TheToolbarComponent} from "./public/the-toolbar-content/the-toolbar.component";
import {TheFooterContentComponent} from "./public/the-footer-content/the-footer-content.component";
import {ActorsTableComponent} from "./actors/components/actors-table/actors-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheToolbarComponent, TheFooterContentComponent, ActorsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice04-pc01';
}
