import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';

let devHosts = ['localhost','127.0.0.1','hymnal-dev.nerdyhippie.com','hymnal-dev.firebaseapp.com'];
if (devHosts.indexOf(window.location.hostname) == -1) enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
