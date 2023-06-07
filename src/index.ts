import { App } from 'vue';

import LText from './components/LText';

const components = [LText];

const install = (app: App) => {
  components.forEach((component) => {
    console.log(component.name + '于世民');
    app.component(component.name, component);
  });
};

export { LText, install };

export default {
  install
};
