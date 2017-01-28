import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import {Hymn} from "../_models/hymn.model";
import {AngularFire} from "angularfire2";
import {User} from "../../global/_models/user.model";
import {UserService} from "../../global/_services/user.service";

@Component({
    moduleId: module.id,
    selector: 'hymn-view',
    templateUrl: 'hymn-view.component.html'
	,styleUrls: ['hymn-view.component.css']
})
export class HymnViewComponent implements OnInit,OnDestroy {
	routeParams$: Subscription;
	selectedHymn: Hymn;
	currentUser: User;
	hymnId: String;
	
	constructor(public af:AngularFire,public userService:UserService,public router:Router,public activatedRoute:ActivatedRoute) { }
	
	ngOnInit() {
		this.userService.currentUser.subscribe((user:User) => this.currentUser = user);
		this.routeParams$ = this.activatedRoute.params.subscribe(params => this.loadHymn(params['id']));
	}
	
	ngOnDestroy() {
		this.routeParams$.unsubscribe()
	}
	
	loadHymn(id:string) {
		this.hymnId = id;
		if (id == 'create') {
			console.log('currUser',this.currentUser);
			this.selectedHymn = {
				title: ''
				,content: ''
				,active: true
				,dateCreated: new Date().toString()
				,createdBy: ''
			};
			//console.log('uid',this.currentUser.uid);
		} else {
			this.af.database.object('/hymns/'+id).subscribe(data => this.selectedHymn = data);
		}
		
	}
    
}
