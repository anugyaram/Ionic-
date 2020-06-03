import { Component,OnInit, Inject  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';


/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage implements OnInit{


  comments: FormGroup;
  comment: Comment;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    @Inject ('BaseURL') public BaseURL,private fb: FormBuilder ) {

      this.comments = this.fb.group({
        author: ['', Validators.required],
        rating: 5,
        comment: ['', Validators.required],
      });
  }
  ngOnInit(){
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.comments.value)
    this.comment = this.comments.value;
    this.comment.date = new Date().toISOString(); 
    console.log(this.comment);
    this.viewCtrl.dismiss(this.comment);
  }
}
