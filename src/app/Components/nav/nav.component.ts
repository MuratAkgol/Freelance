import { Component, OnInit } from '@angular/core';
import { Logo } from 'src/app/Models/logoService';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  logo:Logo[]=[
    {
      logoUrl:'https://www.ufukotofren.com/wp-content/uploads/2020/11/rsz_logo-ufukoto.png'
    }
  ]
  ngOnInit() {
  }

}
