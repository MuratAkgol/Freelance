import { Component, OnInit } from '@angular/core';
import { Logo } from 'src/app/Models/logoService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  logo:Logo[]=[
    {
      logoUrl:'https://i.hizliresim.com/5ielcci.png'
    }
  ]
  ngOnInit() {
  }

}
