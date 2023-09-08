import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { BuildingComponent } from "./components/building/building.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '*', redirectTo: '/home'},
    {path: 'home', component: MainComponent},
    {path: 'building', component: BuildingComponent},
];

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[ RouterModule ]
})

export class AppRoutingModule {}