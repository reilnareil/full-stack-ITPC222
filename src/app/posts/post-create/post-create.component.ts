import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  enteredValue = '';
  newPost = '';
  onAddPost(){
    this.newPost = this.enteredValue;
    //this.newPost = 'this is from the new post under the onAddPost method/function'
  }
}
