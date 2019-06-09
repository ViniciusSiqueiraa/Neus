import { Routes } from '@angular/router'
import { NoticiasComponent } from './noticias/noticias.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { EventosComponent } from './eventos/eventos.component';
import { PesquisasComponent } from './pesquisas/pesquisas.component';
import { AreasComponent } from './areas/areas.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { HomeAdmComponent } from './admin/home-adm/home-adm.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { DadosPessoaisComponent } from './admin/profile/dados-pessoais/dados-pessoais.component';
import { CurriculoComponent } from './admin/profile/curriculo/curriculo.component';
import { MainComponent } from './admin/main/main.component';
import { PublicarComponent } from './admin/publicar/publicar.component';
import { NoticiarComponent } from './admin/noticiar/noticiar.component';

export const ROUTES: Routes = [

    {path: '', component: HomeComponent, children:
    [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeInicioComponent},
        {path: 'noticias', component: NoticiasComponent},
        {path: 'projetos', component: ProjetosComponent},
        {path: 'eventos', component: EventosComponent},
        {path: 'pesquisas', component: PesquisasComponent},
        {path: 'areas', component: AreasComponent},
        {path: 'perfil', component: PerfilComponent}
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent, children: [
        {path: '', redirectTo: 'home-admin', pathMatch: 'full'},
        {path: 'home-admin', component: HomeAdmComponent, children: [
            {path: '', redirectTo: 'main', pathMatch: 'full'},
            {path: 'main', component: MainComponent},
            {path: 'publicar', component: PublicarComponent},
            {path: 'noticiar', component: NoticiarComponent},
        ]},
        {path: 'profile', component: ProfileComponent, children: [
            {path: '', redirectTo: 'dados-pessoais', pathMatch: 'full'},
            {path: 'dados-pessoais', component: DadosPessoaisComponent},
            {path: 'curriculo', component: CurriculoComponent},
        ]}
    ]},
    
]