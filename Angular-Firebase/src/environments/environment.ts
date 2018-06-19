// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBkgEpsAb17hBIDcj9jRq18zlMF7L9e2AY',
    authDomain: 'angular-udemy-course.firebaseapp.com',
    databaseURL: 'https://angular-udemy-course.firebaseio.com',
    projectId: 'angular-udemy-course',
    storageBucket: 'angular-udemy-course.appspot.com',
    messagingSenderId: '839937293902'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
