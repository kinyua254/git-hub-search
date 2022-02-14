import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Repo } from './classes/repo';
import { User } from './classes/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git-Search';


  userData!: User;
  repos!: any;

 
  
  

  updateUserData(userData: User){
    this.userData = userData

  }


  updateRepos(repos: any){
    this.repos = repos

  }
  
  


}