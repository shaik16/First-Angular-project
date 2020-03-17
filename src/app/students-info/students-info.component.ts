import { Component } from '@angular/core';
import { data } from '../data';


@Component({
    selector: 'app-students-info',
    templateUrl: './students-info.component.html',
    styleUrls: ['./students-info.component.css']
})
export class StudentInfo{
    data=data;
}
