import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { AureliaTableConfiguration } from 'aurelia2-table';

Aurelia
  .register(RouterConfiguration)

  .register(AureliaTableConfiguration)
  .app(MyApp)
  .start();