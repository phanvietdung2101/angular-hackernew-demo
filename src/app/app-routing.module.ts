import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleAddFormComponent } from './article-add-form/article-add-form.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'add-article', component: ArticleAddFormComponent },
  { path: 'list-article', component: ArticleListComponent },
  { path: 'card-name', component: NameCardComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
