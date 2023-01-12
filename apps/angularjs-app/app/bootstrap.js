import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
import app from './app.component.html';
import './app.module';
import './routes';
const domElementGetter = () => document.getElementById('angular-app');


const ngLifecycles = singleSpaAngularJS({
  angular: angular,
  domElementGetter,
  mainAngularModule: 'angular-app',
  uiRouter: true,
  preserveGlobal: false,
  template: app,
});


export const bootstrap = ngLifecycles.bootstrap;
export const mount = ngLifecycles.mount;
export const unmount = ngLifecycles.unmount;