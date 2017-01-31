import { NgModule } from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { AngularFireModule }    from 'angularfire2';
import { GlobalModule }         from '../global/global.module';

import { CollectionRouting,CollectionRouteComponents} from './collections.routing';


@NgModule({
    imports: [BrowserModule,CommonModule,FormsModule,AngularFireModule,CollectionRouting
	    ,GlobalModule],
    exports: [],
    declarations: [CollectionRouteComponents],
    providers: [],
})
export class CollectionListModule { }
