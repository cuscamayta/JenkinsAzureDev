// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  API_URL: 'http://localhost:12051/api/',
  REPORTEADOR_URL: 'http://dev-edreports.metrixx.net/api/',

  // It will enable log of status, http results or any information useful
  // for debugging.
  DEBUG_LOG: true,

  // Allow the retry of a http call ***only when the response have a status 500***
  HTTP_RETRY: true,

  // for working with data auto-generated for testing porpuse
  USE_FAKE_DATA: true,

  VERSION: '0.0.1'
};
