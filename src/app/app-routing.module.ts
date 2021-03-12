import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomPageComponent } from "./views/custom-page/custom-page.component";
import { HomeComponent } from './views/home/home.component';

const routes:Routes = [
    { path: '', component:HomeComponent },
    { path: 'custom-page', component:CustomPageComponent },
    { path: '**', redirectTo:'' } 
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}