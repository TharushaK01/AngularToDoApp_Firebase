import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth'; // Import the desired Firebase modules

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp_firebase';
}
