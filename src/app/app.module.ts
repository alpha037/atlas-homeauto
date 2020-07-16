import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FooterComponent } from './footer/footer.component';
import { GuestRoomComponent } from './guest-room/guest-room.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { ContactUsComponent } from './info/contact-us/contact-us.component';
import { LoaderComponent } from './loader/loader.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MasterBedroomComponent } from './master-bedroom/master-bedroom.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApplianceService } from './services/appliance.service';
import { MailService } from './services/mail.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MasterBedroomComponent,
    GuestRoomComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    ControlPanelComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'about',
          component: AboutUsComponent,
        },
        {
          path: 'contact',
          component: ContactUsComponent,
        },

        {
          path: 'master',
          component: MasterBedroomComponent,
          canActivate: [AuthGuardService],
        },
        {
          path: 'guest',
          component: GuestRoomComponent,
          canActivate: [AuthGuardService],
        },

        {
          path: '**',
          component: NotFoundComponent,
        },
      ],
      {
        scrollPositionRestoration: 'top',
      }
    ),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatBottomSheetModule,
    MatChipsModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    ApplianceService,
    MailService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
