// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://api.themoviedb.org/3', //url principal para hacer peticiones al API
  apiKey: '6c9c03d916011f527240b08377154ba5',
  imgPath: 'https://image.tmdb.org/t/p/',
  recaptcha:{
    //siteKey: '6Lcb-PUpAAAAABr9FLWKO_CNQ6Ctpxknt37TYzg-'
    siteKey: '6LfZ8PUpAAAAAD7lW888MbiX-wGBcfBlbVRSIihV'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
