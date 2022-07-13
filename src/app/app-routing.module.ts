import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OperationsComponent } from "./operations/operations.component";
import { NewOperationComponent } from "./new-operation/new-operation.component";
import { OperationDetailComponent } from "./operation-detail/operation-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'new-operation', component: NewOperationComponent },
  { path: 'operation/:id', component: OperationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
