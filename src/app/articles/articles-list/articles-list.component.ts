import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentsListComponent } from '../comments-list/comments-list.component';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.sass']
})
export class ArticlesListComponent implements OnInit {

   // fields
   private url = 'http://127.0.0.1:8080/articles';
   public articles: any;
   fileNameDialogRef: MatDialogRef<CommentsListComponent>;

   // constructor and hooks
   constructor(private http: HttpClient, public dialog: MatDialog)  { }


   ngOnInit() {
     this.getArticles();
   }

   public getArticles() {
     this.articles = this.http.get(this.url);
   }

   public openDialog() {
    this.dialog.open(CommentsListComponent);
   }

}
