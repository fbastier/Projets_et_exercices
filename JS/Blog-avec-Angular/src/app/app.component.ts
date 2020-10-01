import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog-avec-Angular';
  posts = 'Posts';

  messageArray = [
    {
      title: "Premier Post",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
       the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.`,
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: "Post suivant",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
       electronic typesetting, remaining essentially unchanged.`,
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: "Encore un Post",
      content: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
      aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
      nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
      loveIts: 0,
      createdAt: new Date()
    }
  ];


}
