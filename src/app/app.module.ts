import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';

import { MatInputModule } from '@angular/material/input';

import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CourseComponent } from './course/course.component';
import { SectionEngineComponent } from './section-engine/section-engine.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    CourseComponent,
    SectionEngineComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
