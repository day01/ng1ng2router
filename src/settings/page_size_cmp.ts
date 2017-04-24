import {Component} from "@angular/core";

@Component({
  selector: "page-settings",
  template: `
    <h1>Page Size Settings</h1>

    <div *ngFor="let p of sth">
      Page size for '{{p}}' <input [(ngModel)]="model"> (<a [routerLink]="['/messages', p]">open</a>)
    </div>

    <a routerLink="../">Back</a>
  `
})
export class PageSizeCmp {
  public model: number = 1;
  public sth: number[] = [ 2, 12];
}