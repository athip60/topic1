import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  students: any;
  studentAdd = {
    'sid': null,
    'first': '',
    'last': ''
    // 'title': '',
    // 'description': ''
  }
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.homeService.getStudents().subscribe(response => {
      this.students = response;
      console.log(this.students);
    });
  }
  submitReviewAdd() {
    console.log(this.studentAdd);
    this.fetchData();
    this.homeService.postStudents(this.studentAdd).subscribe((response: {}) => alert('บันทึกเรียบร้อย'));
  }
  deleteData(data: any) {
    console.log(data);
    this.homeService.deleteStudents(data).subscribe((response: {}) => alert('ลบเรียบร้อย'));
    this.fetchData();
  }
}
