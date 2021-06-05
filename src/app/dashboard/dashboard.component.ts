import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    let allLinks = document.querySelectorAll(".side-navbar-item")
    allLinks.forEach((item) => {
      item.classList.remove("active")
    });
    allLinks[index].classList.add("active")
  }

}
