import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Models/companyService';


@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }


  companies: CompanyService[] = [
    {
      Id:1,
     company:'Wabco',
     companyLogo:'https://femaas.com/media/1088/febs-_0014_wabco-vector-logo.jpg?anchor=center&mode=crop&width=570&height=369&rnd=132464606550000000'
    },
    {
      Id:2,
     company:'Knorr-Bremse',
     companyLogo:'https://femaas.com/media/1087/febs-_0013_knorr-bremse.jpg?anchor=center&mode=crop&width=570&height=369&rnd=132464606540000000'
    },
    {
      Id:3,
     company:'Haldex',
     companyLogo:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Haldex-Logo.svg'
    },
    {
      Id:4,
     company:'Saf-Holland',
     companyLogo:'https://femaas.com/media/1094/febs-_0000_saf_holland.jpg?anchor=center&mode=crop&width=570&height=369&rnd=132464608330000000'
    },
    {
      Id:5,
     company:'Bpw',
     companyLogo:'https://femaas.com/media/1078/febs-_0004_bpw.jpg?anchor=center&mode=crop&width=570&height=369&rnd=132464606520000000'
    }
  ]

  ngOnInit() {
  }

}
