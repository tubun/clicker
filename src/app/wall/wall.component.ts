import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class WallComponent implements OnInit {

  posts:any[]=[];
  loadData:boolean = false;
  dataLoadFailed:boolean = false;
  infiniteCounter=1;
  fetchData: any;

  constructor(
    private _api:ApiService
  ) {
}

  ngOnInit(): void {

    this.fetchPosts()

  }

  onScroll() {

    this.fetchPosts();

  }

  fetchPosts(){
    const  apiBundle = [
      this._api.get(`https://randomuser.me/api/?page=${this.infiniteCounter}&results=2&seed=feed`),
      this._api.get( `https://picsum.photos/v2/list?page=${this.infiniteCounter}&limit=2`)
    ]


    this.loadData = true;

    this.fetchData = forkJoin(apiBundle).subscribe(res=>{

      var userDatas:any[]=[];

      if(res && Array.isArray(res)){
        const parsedResponse = JSON.parse(res[0])

        if(parsedResponse && typeof parsedResponse == "object" && parsedResponse.hasOwnProperty('results')){

          const users = parsedResponse.results
          
          if(Array.isArray(users)){
            
            // Construct user data
            users.forEach(user=>{
              const userData = {
                profile: user.picture.large,
                userName: user.name.first,
                lastName: user.name.last,
                city: user.location.city,
                country: user.location.country,
                phone:user.phone
              }

              userDatas.push(userData)
            })
          }

        }

        const parsedPost = JSON.parse(res[1])

        
        if(parsedPost && Array.isArray(parsedPost)){

          // Attach post picture with user data
          parsedPost.forEach((post,index)=>{
            userDatas[index].image = post.download_url
          })


        }

        this.posts = [...this.posts,...userDatas]

        this.infiniteCounter++

        this.loadData = false;

        this.dataLoadFailed = false;

      }

    },error=>{
      this.loadData = false;
      this.dataLoadFailed = true;
    })
  }

}
