import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'
import { ROUTES } from '../app/app.routes'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { MembrosComponent } from './membros/membros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoComponent } from './projetos/projeto/projeto.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { PesquisasComponent } from './pesquisas/pesquisas.component';
import { PesquisaComponent } from './pesquisas/pesquisa/pesquisa.component';
import { AreasComponent } from './areas/areas.component';
import { AreaComponent } from './areas/area/area.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAdmComponent } from './admin/home-adm/home-adm.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { DadosPessoaisComponent } from './admin/profile/dados-pessoais/dados-pessoais.component';
import { CurriculoComponent } from './admin/profile/curriculo/curriculo.component';
import { MainComponent } from './admin/main/main.component';
import { PublicarComponent } from './admin/publicar/publicar.component';
import { NoticiarComponent } from './admin/noticiar/noticiar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    MembrosComponent,
    NoticiasComponent,
    MenuHomeComponent,
    NoticiaComponent,
    ProjetosComponent,
    ProjetoComponent,
    EventosComponent,
    EventoComponent,
    PesquisasComponent,
    PesquisaComponent,
    AreasComponent,
    AreaComponent,
    HomeInicioComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    HomeAdmComponent,
    PerfilComponent,
    ProfileComponent,
    HeaderAdminComponent,
    DadosPessoaisComponent,
    CurriculoComponent,
    MainComponent,
    PublicarComponent,
    NoticiarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
