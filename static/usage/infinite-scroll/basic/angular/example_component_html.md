```html
<ion-content>
  <ion-list>
    <ion-item *ngFor="let item of items; let index">
      <ion-avatar slot="start">
        <img [src]="'https://loremflickr.com/80/80/person?random=' + index" alt="avatar" />
      </ion-avatar>
      <ion-label>{{ item }}</ion-label>
    </ion-item>
  </ion-list>
  <ion-infinite-scroll (ionInfinite)="onIonInfinite($event)">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```