import { Component } from '@angular/core';
import lottie from 'lottie-web'
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ufuk-oto';
}
