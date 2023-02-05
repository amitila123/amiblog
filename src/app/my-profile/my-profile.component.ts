import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  title = 'AMI BLOG';
  url = location.href;
  constructor() { }

  ngOnInit() {
  }

}
