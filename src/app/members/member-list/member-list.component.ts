import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.sass']
})
export class MemberListComponent implements OnInit {

  // fields
  private url = 'http://127.0.0.1:8080/members';
  public users: any;


  // constructor and hooks
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.getMembers();
  }



  public getMembers() {
    this.users = this.http.get(this.url);
  }

}
