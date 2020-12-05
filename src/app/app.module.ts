import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ManageBlogsComponent } from './admin/manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManagePagesComponent } from './admin/manage-pages/manage-pages.component';
import { LoginComponent } from './auth/login/login.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { HeaderComponent } from './header/header.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { PageComponent } from './cmspage/page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminComponent,
    ManageBlogsComponent,
    ManageCategoriesComponent,
    ManagePagesComponent,
    LoginComponent,
    httpInterceptorProviders,
    HeaderComponent,
    BlogpostComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
