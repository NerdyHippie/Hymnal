import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import {Hymn} from "../_models/hymn.model";
import {AngularFire} from "angularfire2";
import {HymnViewComponent} from "../hymn-view/hymn-view.component";
import {AlertService} from "../../global/_services/alert.service";
import {UtilService} from "../../global/_services/utils.service";
import {UserService} from "../../global/_services/user.service";


@Component({
    moduleId: module.id,
    selector: 'hymn-edit',
    templateUrl: 'hymn-edit.component.html'
})
export class HymnEditComponent extends HymnViewComponent implements OnInit,OnDestroy {
		
		constructor(public af:AngularFire,public userService:UserService,public router:Router,public activatedRoute:ActivatedRoute,public alertService:AlertService,public utils:UtilService) {
			super(af,userService,router,activatedRoute);
		}
		
		saveHymn() {
			if (this.selectedHymn.$key) {
				let hymnId = this.selectedHymn.$key;
				let cleaned = this.utils.cleanObj(this.selectedHymn);
				this.af.database.object('/hymns/'+hymnId)
					.update(cleaned)
					.then((data:any) => this.router.navigate(['../../'+hymnId],{relativeTo:this.activatedRoute}))
					.catch((error:any) => {console.error('Hymnal: error saving obj',error); this.alertService.error(error);});
			} else {
				this.af.database.list('/hymns').push(this.selectedHymn)
					.then((data:any) => {
						this.router.navigate(['../../'+data.getKey()],{relativeTo:this.activatedRoute});
					})
					.catch((error:any) => {console.error('Hymnal: error pushing obj',error); this.alertService.error(error);});
			}
			
		}
		
		cancelEdit() {
			if (this.hymnId == 'create') {
				this.router.navigate(['../../'],{relativeTo:this.activatedRoute});
			} else {
				this.router.navigate([('../../'+this.selectedHymn.$key)],{relativeTo:this.activatedRoute});
			}
			
		}
		
    /*ngOnInit() {
	    this.routeParams$ = this.activatedRoute.params.subscribe(params => this.loadHymn(params['id']));
    }
    
    ngOnDestroy() {
			this.routeParams$.unsubscribe()
    }
    
    loadHymn(id:string) {
			this.af.database.object('/hymns/'+id).subscribe(data => this.selectedHymn = data);
			
    }*/
    
    
    
}
