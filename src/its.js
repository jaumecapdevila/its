import run from './app';

import { isEmpty, hasProperty } from './utils/util';

import { name, defaults } from './config/settings';

const userConfig = browser.storage.local.get();

userConfig.then(config => {
  run(isEmpty(config) || !hasProperty(config, name) ? defaults : config);
});
