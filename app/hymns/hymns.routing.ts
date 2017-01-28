import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from '../global/_guards/auth.guard';

import { HymnsComponent } from './hymns.component';
import { HymnListComponent } from './hymn-list/hymn-list.component';
import { HymnEditComponent } from './hymn-edit/hymn-edit.component';
import { HymnViewComponent } from './hymn-view/hymn-view.component';
import { HymnPrintComponent } from './hymn-print/hymn-print.component';

const HymnRoutes: Routes = [
	{
		path: 'hymns'
		,component: HymnsComponent
		,canActivate: [ AuthGuard ]
		,children: [
			{
				path: ''
				,component: HymnListComponent
			},{
				path: 'create'
				,component: HymnEditComponent
			},{
				path: 'print'
				,component: HymnPrintComponent
			},{
				path: ':id'
				,component: HymnViewComponent
			},{
				path: 'edit/:id'
				,component: HymnEditComponent
			}
			
	]
	}
];

export const HymnRouteComponents = [HymnsComponent,HymnListComponent,HymnEditComponent,HymnViewComponent,HymnPrintComponent];
export const HymnRouting: ModuleWithProviders = RouterModule.forChild(HymnRoutes);
