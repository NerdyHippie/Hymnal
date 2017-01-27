import { NgModule } from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { AngularFireModule }    from 'angularfire2';
import { GlobalModule }         from '../global/global.module';

import { HymnRouting,HymnRouteComponents} from './hymns.routing';

//import { HymnListComponent } from './hymn-list/hymn-list.component';

@NgModule({
	imports:      [ BrowserModule,CommonModule,FormsModule,AngularFireModule,HymnRouting
		,GlobalModule ],
	declarations: [ HymnRouteComponents ],
	exports:      [
		BrowserModule,CommonModule, FormsModule ]
})
export class HymnsModule { }
