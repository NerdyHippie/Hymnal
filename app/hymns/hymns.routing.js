"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('../global/_guards/auth.guard');
var hymn_list_component_1 = require('./hymn-list/hymn-list.component');
var hymn_edit_component_1 = require('./hymn-edit/hymn-edit.component');
var hymn_view_component_1 = require('./hymn-view/hymn-view.component');
var HymnRoutes = [
    {
        path: 'hymns',
        component: hymn_list_component_1.HymnListComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'create',
                component: hymn_edit_component_1.HymnEditComponent
            }, {
                path: ':id',
                component: hymn_view_component_1.HymnViewComponent
            }, {
                path: 'edit/:id',
                component: hymn_edit_component_1.HymnEditComponent
            }
        ]
    }
];
exports.HymnRouteComponents = [hymn_list_component_1.HymnListComponent, hymn_edit_component_1.HymnEditComponent, hymn_view_component_1.HymnViewComponent]; //,AdminHomeComponent
exports.HymnRouting = router_1.RouterModule.forChild(HymnRoutes);
//# sourceMappingURL=hymns.routing.js.map