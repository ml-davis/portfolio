import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatCardModule, MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsService } from './projects.service';
import { SafePipe } from './safe.pipe';

const appRoutes: Routes = [
  { path: 'project/:id', component: ProjectPageComponent },
  { path: '',            component: MainPageComponent },
  { path: '**',          component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    WorkHistoryComponent,
    NavbarComponent,
    PersonalProjectsComponent,
    ProjectPageComponent,
    MainPageComponent,
    PageNotFoundComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
