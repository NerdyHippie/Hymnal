import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import {Hymn} from "../_models/hymn.model";
import {AngularFire} from "angularfire2";

@Component({
    moduleId: module.id,
    selector: 'hymn-view',
    templateUrl: 'hymn-view.component.html'
})
export class HymnViewComponent implements OnInit,OnDestroy {
	routeParams$: Subscription;
	selectedHymn: Hymn;
	
	constructor(public af:AngularFire,public router:Router,public activatedRoute:ActivatedRoute) { }
	
	ngOnInit() {
		this.routeParams$ = this.activatedRoute.params.subscribe(params => this.loadHymn(params['id']));
	}
	
	ngOnDestroy() {
		this.routeParams$.unsubscribe()
	}
	
	loadHymn(id:string) {
		this.af.database.object('/hymns/'+id).subscribe(data => this.selectedHymn = data);
		
	}
    
}
