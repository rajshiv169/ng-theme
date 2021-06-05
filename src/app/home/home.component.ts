import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private _fname: string;
  private _lname: string;

  get fname(): string {
    return this._fname;
  }
  set fname(val: string) {
    this._fname = val;
  }

  get lname(): string {
    return this._lname;
  }
  set lname(val: string) {
    this._lname = val;
  }

  ngOnInit(): void {
  }

  tableHead = ["Name", "Email", "Company", "Phone"]

  tableData = [
    {
      "Name": "Odysseus",
      "Email": "lobortis@lacinia.com",
      "Company": "Mi Company",
      "Phone": "055 5747 3855"
    },
    {
      "Name": "Dorothy",
      "Email": "natoque@Suspendisse.org",
      "Company": "Elit Company",
      "Phone": "055 3519 7078"
    },
    {
      "Name": "Destiny",
      "Email": "turpis.egestas@nonjusto.net",
      "Company": "Lobortis Risus In Corp.",
      "Phone": "07624 156876"
    },
    {
      "Name": "Len",
      "Email": "dolor.Fusce@vel.edu",
      "Company": "Libero Dui Corp.",
      "Phone": "0372 685 1286"
    },
    {
      "Name": "Peter",
      "Email": "pede@euaccumsan.org",
      "Company": "Proin Dolor Inc.",
      "Phone": "(016977) 2633"
    },
    {
      "Name": "Connor",
      "Email": "tellus.id.nunc@Phasellusataugue.net",
      "Company": "Rutrum Non Hendrerit Inc.",
      "Phone": "056 3360 4883"
    },
    {
      "Name": "Donna",
      "Email": "semper.pretium@sempertellusid.ca",
      "Company": "Mus Proin Vel Limited",
      "Phone": "0800 006 8667"
    },
    {
      "Name": "Perry",
      "Email": "nonummy.ultricies@aliquetPhasellus.ca",
      "Company": "Vitae Ltd",
      "Phone": "076 6590 1500"
    },
    {
      "Name": "Stephen",
      "Email": "eleifend.nec@tristique.edu",
      "Company": "Faucibus Associates",
      "Phone": "055 4723 9181"
    },
    {
      "Name": "Nadine",
      "Email": "Sed.diam@eratSed.co.uk",
      "Company": "A Sollicitudin Orci Foundation",
      "Phone": "0823 320 3584"
    },
    {
      "Name": "Wesley",
      "Email": "dignissim@Aliquamerat.edu",
      "Company": "Et Company",
      "Phone": "(016977) 7217"
    },
    {
      "Name": "Elizabeth",
      "Email": "erat.eget@pellentesque.co.uk",
      "Company": "Vulputate Corporation",
      "Phone": "0800 757 6915"
    }
  ]

  onSubmit() {
    alert("Hello," + this.fname + " " +this.lname)
  }
}
