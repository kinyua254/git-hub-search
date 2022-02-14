import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDets } from 'src/app/class/user-dets';
import { UserService } from 'src/app/users.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  alertService!: AlertService;
 
  

  @Output()
  gitUser!: string;


 
  



  @Output() userFetched: EventEmitter<User> = new EventEmitter();
  @Output() reposFetched: EventEmitter<any> = new EventEmitter();



  userData!: User;
  repos!: any;
  errStat: boolean = true
  

  @Output()  errorEvent = new EventEmitter<boolean>()


  constructor(private userService: UserService, private http: HttpClient, alertservice: AlertService,) {
    this.alertService = alertservice
    

  }


  searchGitUsers() {


    let promise: any = new Promise<void>((resolve, reject) => {

      this.userService.getUser(this.gitUser).toPromise().then(res => {
        this.userData = new User(res.login, res.avatar_url, res.created_at, res.html_url, res.followers, res.following, res.public_repos, res.public_gists)
        this.userFetched.emit(this.userData)
        resolve()
      
      },
      
       error => {
        
        this.errorEvent.emit(this.errStat)
       
        reject(error)
      })
      

      this.userService.getUserRepos(this.gitUser).toPromise().then(res => {
        this.repos = res
        this.reposFetched.emit(this.repos)
        resolve()
      })
this.gitUser= ""


    })
    return promise






  }





  ngOnInit(): void { }



}