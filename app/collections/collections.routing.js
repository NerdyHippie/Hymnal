"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('../global/_guards/auth.guard');
var collections_component_1 = require('./collections.component');
var collection_list_component_1 = require('./collection-list/collection-list.component');
/*import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';
import { CollectionPrintComponent } from './collection-print/collection-print.component';*/
var CollectionRoutes = [
    {
        path: 'collections',
        component: collections_component_1.CollectionsComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: '',
                component: collection_list_component_1.CollectionListComponent
            } /*,{
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
exports.CollectionRouteComponents = [collections_component_1.CollectionsComponent, collection_list_component_1.CollectionListComponent]; //,CollectionEditComponent,CollectionViewComponent,CollectionPrintComponent
exports.CollectionRouting = router_1.RouterModule.forChild(CollectionRoutes);
//# sourceMappingURL=collections.routing.js.map