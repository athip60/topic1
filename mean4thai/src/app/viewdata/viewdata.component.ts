import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewdataService } from '../service/viewdata.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  constructor(private route: ActivatedRoute, private reviewdataService: ViewdataService) { }
  dataId: any;
  data: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dataId = params.get('dataId');
    });
    this.reviewdataService.getReviewsById(this.dataId).subscribe(response => {
      this.data = response[0];
    });
  }
}
