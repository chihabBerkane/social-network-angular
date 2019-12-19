import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleComponent } from './articles/article/article.component';




const appRoutes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'articles', component: ArticlesListComponent},
  { path: 'articles/:id', component: ArticleComponent},
  // { path: '',   redirectTo: '/signin', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
