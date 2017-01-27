import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Hymn } from '../_models/hymn.model';
import {AlertService} from "../../global/_services/alert.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'hymn-list',
    templateUrl: 'hymn-list.component.html'
})
export class HymnListComponent implements OnInit {
		hymns: Array<Hymn>;
		
    constructor(private af:AngularFire, private alertService:AlertService,private router:Router) { }

    ngOnInit() {
    	this.af.database.list('/hymns').subscribe(data => this.hymns = data,error => this.alertService.error(error));
    }

    createNewHymn() {
    	this.router.navigate(['./create']);
    }
    
    viewHymn(id:string) {
    	this.router.navigate(['./'+id]);
    }
    
    editHymn(id:string) {
    	this.router.navigate(['./edit/'+id]);
    }
    
}
