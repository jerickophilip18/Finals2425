import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ClassRecordComponent } from './class-record/class-record.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultationComponent } from './consultation/consultation.component';



export const routes: Routes = [
  { path : 'registration', component: RegistrationComponent, title: 'Registration'},
  { path : 'profile', component: UserProfileComponent, title: 'User Profile'},
  { path : 'class-record', component: ClassRecordComponent, title: 'Class Record'},
  { path : 'footer', component: FooterComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'consultation', component: ConsultationComponent}
];
