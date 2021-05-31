import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import * as UxComponents from 'ux';
import {
  FASTDesignSystemProvider,
  FASTCard,
  FASTButton,
  FASTTextField,
  FASTTextArea,
  FASTCheckbox
} from '@microsoft/fast-components';
import { AureliaFastAdapter } from './aurelia-fast-adapter';

FASTDesignSystemProvider;
FASTCard;
FASTButton;
FASTTextField;
FASTTextArea;
FASTCheckbox;
  //  '@aurelia-ux/core';
  // '@aurelia-ux/components';
  // '@aurelia-ux/input';
  // '@aurelia-ux/icons';
  // '@aurelia-ux/datepicker';

// export function configure(aurelia) {
//     aurelia.use.plugin('@aurelia-ux/core');
//      aurelia.use.plugin('@aurelia-ux/components');
//      aurelia.use.plugin('@aurelia-ux/input');
//      aurelia.use.plugin('@aurelia-ux/icons');
//      aurelia.use.plugin('@aurelia-ux/datepicker');
//   //  '@aurelia-ux/core';
//   // '@aurelia-ux/components';
//   // '@aurelia-ux/input';
//   // '@aurelia-ux/icons';
//   // '@aurelia-ux/datepicker';
// }
Aurelia

  .register(RouterConfiguration)
  .register(AureliaFastAdapter) // add this line
  .register( UxComponents )
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))

  .app(MyApp)
  .start();
