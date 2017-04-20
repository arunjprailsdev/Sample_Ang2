import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Approute } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SetupComponent } from './setup/setup.component';
import { ProductComponent } from './product/product.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { FaqComponent } from './faq/faq.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { RailsAngComponent } from './rails-ang/rails-ang.component';
import { PostComponent } from './post/post.component';
import { NrComponent } from './nr/nr.component';
import { RemapComponent } from './remap/remap.component';
import { RdrComponent } from './rdr/rdr.component';
import { ApiComponent } from './api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    UserComponent,
    SetupComponent,
    ProductComponent,
    ManufacturerComponent,
    FaqComponent,
    TestServiceComponent,
    HttpServiceComponent,
    RailsAngComponent,
    PostComponent,
    NrComponent,
    RemapComponent,
    RdrComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
