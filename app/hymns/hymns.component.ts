import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hymns',
    template: `<router-outlet></router-outlet>`
})
export class HymnsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    
}
