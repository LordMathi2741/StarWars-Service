import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";


@Component({
  selector: 'the-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './the-toolbar.component.html',
  styleUrl: './the-toolbar.component.css'
})
export class TheToolbarComponent {

}
