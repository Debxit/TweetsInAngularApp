import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    hashtags: string[];
    tweetsdata;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.hashtags = [];
        this.dataService.authorize();
    }

    addHashtag(hashtag) {
        this.hashtags.push('#'+hashtag);
        return false;
    }

    deleteHashtag(hashtag) {
        for (let i = 0; i < this.hashtags.length; i++) {
            if (this.hashtags[i] == hashtag) {
                this.hashtags.splice(i, 1);
            }
        }
    }

    deleteTweet(id){
        this.tweetsdata.forEach((item,index) => {
           if( item.id == id){
               this.tweetsdata.splice(index, 1);
           }
        });
    }

    showTweets(hashtags) {
        console.log(hashtags);
        this.dataService.search(hashtags).subscribe((res) => {
           this.tweetsdata = res.json().data.statuses;
            // this.tweetsdata.forEach((item) => {
            //     if(item.entities.urls[0]){
            //         console.log(item.entities.urls[0].expanded_url);
            //     }
            // });
        });
    }
}