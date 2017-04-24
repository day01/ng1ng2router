/**
 * This file defines the root module of the Angular 2 of the application.
 */

// import angular2
import {NgModule, Component} from "@angular/core";
import {RouterModule, UrlHandlingStrategy} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {UpgradeModule} from "@angular/upgrade/static";

// import app modules
import {SettingsNgModule} from "./settings";
import { MenuNgModule } from "ng1module/src/menu";

// this URL handling strategy is custom and application-specific.
// using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { return url.toString().startsWith("/settings"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@Component({
  selector: "root-cmp",
  template: `
    <router-outlet></router-outlet>
    <div class="ng-view"></div>
  `,
})
export class RootCmp {}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,

    // import all modules
    MenuNgModule,
    SettingsNgModule,

    // we don't need to provide any routes.
    // the router will collect all routes from all the registered modules.
    RouterModule.forRoot([])
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],

  bootstrap: [RootCmp],
  declarations: [RootCmp]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule){}
}