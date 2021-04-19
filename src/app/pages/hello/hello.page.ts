import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  lenguajesp:any = [
    {
      imagen:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png",
      name:"Javascript"
    },
    {
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
      name:"Python",

    },
    {
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      name:"typescript"
    },
    {
      imagen:"https://i.blogs.es/53044d/java/1366_521.jpg",
      name:"Java"
    },
    {
      imagen:"https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      name:"PHP"
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.lenguajesp)
  }
 
}
