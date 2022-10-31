```tsx
import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

function PageTwo() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/one"></IonBackButton>
          </IonButtons>
          <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page Two</h1>
        <p>Use the back button to navigate to the previous page.</p>
      </IonContent>
    </>
  );
}

export default PageTwo;
```