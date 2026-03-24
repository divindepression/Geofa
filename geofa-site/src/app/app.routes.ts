import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ObjectivesComponent } from './pages/objectives/objectives.component';
import { MembersComponent } from './pages/members/members.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'objectifs', component: ObjectivesComponent },
  { path: 'membres', component: MembersComponent },
  { path: 'organisation', component: OrganizationComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'contact', component: ContactComponent },
];