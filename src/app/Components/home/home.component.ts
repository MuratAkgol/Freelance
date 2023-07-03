import { Component, HostListener, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Models/companyService';
import { ourServicesModel } from 'src/app/Models/ourServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor() { }

  ourService: ourServicesModel[] = [
    { 
    name: 'Yol Yardım Hizmeti', 
    description: 'Tüm acil yol yardım talebi için; 7 gün 24 saat 530 790 3535 numaralı telefonu arayarak bize ulaşabilirsiniz.',
    imageUrl:'https://i.hizliresim.com/tbhaybz.jpeg'
  },
  {
    name:'Yedek Parça Satışı',
    description:'En yüksek kalite ve performans sahibi ağır vasıta yedek parçalarına, en uygun fiyatlarla ulaşmak için doğru adrestesiniz.',
    imageUrl:'https://www.ufukotofren.com/wp-content/uploads/2021/03/2019_Top_Five_Class_5-Mack.jpg'
  },
  {
    name:'Fren Kaliper Tamiri',
    description:'Ağır vasıta kaliper tamiri servisimiz yetenekli, tecrübeli ve alanında uzman ekibimiz tarafından Ufuk Oto Fren farkıyla siz değerli müşterilerimizin hizmetinizdedir.',
    imageUrl:'https://www.ufukotofren.com/wp-content/uploads/2021/03/4-1024x742-2.png'
  }
  ]

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
