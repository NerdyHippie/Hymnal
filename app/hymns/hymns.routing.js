"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('../global/_guards/auth.guard');
var hymns_component_1 = require('./hymns.component');
var hymn_list_component_1 = require('./hymn-list/hymn-list.component');
var hymn_edit_component_1 = require('./hymn-edit/hymn-edit.component');
var hymn_view_component_1 = require('./hymn-view/hymn-view.component');
var hymn_print_component_1 = require('./hymn-print/hymn-print.component');
var HymnRoutes = [
    {
        path: 'hymns',
        component: hymns_component_1.HymnsComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: '',
                component: hymn_list_component_1.HymnListComponent
            }, {
                path: 'create',
                component: hymn_edit_component_1.HymnEditComponent
            }, {
                path: 'print',
                component: hymn_print_component_1.HymnPrintComponent
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
exports.HymnRouteComponents = [hymns_component_1.HymnsComponent, hymn_list_component_1.HymnListComponent, hymn_edit_component_1.HymnEditComponent, hymn_view_component_1.HymnViewComponent, hymn_print_component_1.HymnPrintComponent];
exports.HymnRouting = router_1.RouterModule.forChild(HymnRoutes);
//# sourceMappingURL=hymns.routing.js.map