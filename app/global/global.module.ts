import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { AlertComponent,LoadingMessageComponent } from './_directives/index';

export const globalComponents: Array<any> = [AlertComponent,LoadingMessageComponent];

@NgModule({
    imports:      [ CommonModule,FormsModule ],
    declarations: [ globalComponents ],
    exports:      [
        CommonModule, FormsModule, globalComponents ]
})
export class GlobalModule {
    constructor() {

    }
}
