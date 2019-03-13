import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
  moduleId:  module.id,
  selector: 'user',
  templateUrl:'user.component.html' 
,
providers: [PostsService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address:address;
  lifeStyles: string[];
  showlifeStyles: boolean;
  posts: post[];
  
  constructor(private PostsService:PostsService){
    this.name = 'Maureen Oki';
    this.email = 'maureen@getMaxListeners.com';
    this.address = {
      street : 'festac',
      city: 'lagos',
      houseNumber: 4, 
     };
    this.lifeStyles = ['fun', 'sport', 'swimming'];
    this.showlifeStyles = false;
    this.PostsService.getPosts().subscribe(posts=>{
      this.posts = posts
    })

  }
  toggleLifestyles(){
    if(this.showlifeStyles == true){
      this.showlifeStyles =false;
    }
    else{this.showlifeStyles = true;}
    
    
  }
  addLifestyle(hobby: string){
    this.lifeStyles.push(hobby)
   
    
  }
  deleteLifestyle(i:number){
    this.lifeStyles.splice(i,1)
   
    
  }
}

interface address {
  street: string;
  city: string;
  houseNumber: number;
}

interface post {
  id: number;
  title: string;
  body:string;
}
