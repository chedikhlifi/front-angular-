import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProjetComponent } from '../../pages/projet/projet.component';
import { RessourceComponent } from '../../pages/ressource/ressource.component';
import { AjouteRessourceComponent } from '../../pages/ajoute-ressource/ajoute-ressource.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'projet',         component: ProjetComponent },
    { path: 'ressource',         component: RessourceComponent },
    { path: 'ajoute-ressource',         component: AjouteRessourceComponent }
];
