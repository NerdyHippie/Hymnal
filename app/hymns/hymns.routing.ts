import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from '../global/_guards/auth.guard';

import { HymnListComponent }   from './hymn-list/hymn-list.component';
import { HymnEditComponent } from './hymn-edit/hymn-edit.component'
import { HymnViewComponent } from './hymn-view/hymn-view.component'

const HymnRoutes: Routes = [
	{
		path: 'hymns'
		,component: HymnListComponent
		,canActivate: [ AuthGuard ]
		,children: [
			{
				path: 'create'
				,component: HymnEditComponent
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

export const HymnRouteComponents = [HymnListComponent,HymnEditComponent,HymnViewComponent];//,AdminHomeComponent
export const HymnRouting: ModuleWithProviders = RouterModule.forChild(HymnRoutes);
