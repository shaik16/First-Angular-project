import { Component } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent{
    date = new Date();
    day = this.date.getDate();
    month = this.date.getMonth();
    year = this.date.getFullYear();
    loc = "Bangalore";
    branch = "Vijaynagar";
}
