// Vendor modules
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule,EditorModule,SharedModule} from 'primeng/primeng';

// App Routing
import { AppRouting,AppRoutingComponents } from './app.routing';
import { AuthGuard } from './global/_guards/index';

// Hymnal Modules
import { AdminModule } from './admin/admin.module';
import { HymnsModule } from './hymns/hymn.module';
import { GlobalModule } from './global/global.module';

// Components
import { AppComponent }  from './app.component';
import { NavBarComponent }  from './core/nav-bar/nav-bar.component';

// Global Services
import { AlertService,AuthenticationService,Logger,UserService,UtilService } from './global/_services/index';

// Environment Config
//noinspection TypeScriptCheckImport
import { FirebaseConfig,myFirebaseAuthConfig } from 'firebaseConfig';

// Concatenate Components here for readability
export const CoreComponents: Array<any> = [NavBarComponent];
export const PrimeModules: Array<any> = [CalendarModule,EditorModule,GlobalModule];


@NgModule({
	imports:      [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		AngularFireModule.initializeApp(FirebaseConfig,myFirebaseAuthConfig),
		NgbModule.forRoot()
		,PrimeModules
		,AppRouting
		,AdminModule
		,HymnsModule
		,GlobalModule
	],
	declarations: [
		AppComponent,
		CoreComponents,
		AppRoutingComponents
	],
	
	providers: [
		AuthGuard,
		AlertService,
		AuthenticationService,
		Logger,
		UserService,
		UtilService
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
