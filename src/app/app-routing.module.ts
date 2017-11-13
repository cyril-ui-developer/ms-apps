import {NgModule}   from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
           {path: '', redirectTo: 'appone', pathMatch: 'full'},
            // {path:"app", component:AppComponent },
            {path: 'appone', loadChildren: 'app-one/app.module#AppOneModule'},
            {path: 'apptwo', loadChildren: 'app-two/app.module#AppTwoModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
