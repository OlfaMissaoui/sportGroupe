import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {
article:any=[
  {id:1,title:"Premier League: " ,description:"Liverpool vs Arsenal preview, prediction & team news",date:"20/05/2023" },
  {id:2,title:"Premier League:",description:"Liverpool vs Manchester United Preview, Prediction & Team News",  date:"12/07/2023"},
  {id:3,title:"Premier League:z" ,description:"Tottenham Hotspur vs Newcastle United preview, prediction & team news",date:"06/12/2023" }
];
  constructor() { }

  ngOnInit() {
  }

}
