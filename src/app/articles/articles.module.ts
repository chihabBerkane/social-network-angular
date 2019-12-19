import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';


@NgModule({
  declarations: [ArticlesListComponent, ArticleComponent, CommentsListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class ArticlesModule { }
