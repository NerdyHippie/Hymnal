import { Component, OnInit } from '@angular/core';
import { HymnListComponent } from "../hymn-list/hymn-list.component";
import {AngularFire} from "angularfire2";
import {AlertService} from "../../global/_services/alert.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'hymn-print'
		,templateUrl: 'hymn-print.component.html'
	,styleUrls: ['hymn-print.component.css','../hymn-view/hymn-view.component.css']
})
export class HymnPrintComponent extends HymnListComponent implements OnInit {
		printSettings: Object = {
			fontSize: '12pt'
			,colCount: 1
			,selectedHymns: []
		};
	
    constructor(public af:AngularFire,public alertService:AlertService,public router:Router) {
    	super(af,alertService,router);
    }

    
}
