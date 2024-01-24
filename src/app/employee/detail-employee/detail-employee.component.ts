import { Component, OnInit } from '@angular/core';
import { DetailEmployeeService } from './detail-employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent implements OnInit{
  username: any;
  data: any;
  constructor(private route:ActivatedRoute,private detailEmployeeService: DetailEmployeeService) { }
  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get("username");
    this.username = username;
    this.getData();
  }
  getData() {
    this.detailEmployeeService.getBy('username', this.username).subscribe({
      next: (response) => {
        this.data = response as any[];
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
