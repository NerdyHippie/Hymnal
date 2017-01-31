import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from '../global/_guards/auth.guard';

import { CollectionsComponent } from './collections.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
/*import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';
import { CollectionPrintComponent } from './collection-print/collection-print.component';*/

const CollectionRoutes: Routes = [
	{
		path: 'collections'
		,component: CollectionsComponent
		,canActivate: [ AuthGuard ]
		,children: [
		{
			path: ''
			,component: CollectionListComponent
		}/*,{
			path: 'create'
			,component: CollectionEditComponent
		},{
			path: 'print'
			,component: CollectionPrintComponent
		},{
			path: ':id'
			,component: CollectionViewComponent
		},{
			path: 'edit/:id'
			,component: CollectionEditComponent
		}*/
	
	]
	}
];

export const CollectionRouteComponents = [CollectionsComponent,CollectionListComponent]; //,CollectionEditComponent,CollectionViewComponent,CollectionPrintComponent
export const CollectionRouting: ModuleWithProviders = RouterModule.forChild(CollectionRoutes);
