import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-add-form',
  templateUrl: './article-add-form.component.html',
  styleUrls: ['./article-add-form.component.css']
})
export class ArticleAddFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  addArticle(){
    let title = <HTMLInputElement> document.getElementById('title');
    let url =  <HTMLInputElement> document.getElementById('url');
    // this.articles.push(
    //   {
    //     title: title.value,
    //     url: url.value
    //   }
    // )
  }
}
