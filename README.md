# react-native-ideploy-tef

tef by elgin

## Installation

Using npm:
```sh
npm install react-native-ideploy-tef
```

Using yarn:
```sh
yarn add react-native-ideploy-tef
```

## Configuration

After installing the package, you need to configure your `settings.gradle` file to include the required dependencies.

Open `settings.gradle` located in `android/settings.gradle` and add the following lines:

```groovy
// For production environment
include (':elgin-core')
project(':elgin-core').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/prod/elgin-core')
include (':elgin-destaxa')
project(':elgin-destaxa').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/prod/elgin-destaxa')
include (':elgin-payments')
project(':elgin-payments').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/prod/elgin-payments')
include (':elgin-ppcomp')
project(':elgin-ppcomp').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/prod/elgin-ppcomp')
include (':elgin-printer')
project(':elgin-printer').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/prod/elgin-printer')

// For homologation environment
// include (':elgin-core')
// project(':elgin-core').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/hom/elgin-core')
// include (':elgin-destaxa')
// project(':elgin-destaxa').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/hom/elgin-destaxa')
// include (':elgin-payments')
// project(':elgin-payments').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/hom/elgin-payments')
// include (':elgin-ppcomp')
// project(':elgin-ppcomp').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/hom/elgin-ppcomp')
// include (':elgin-printer')
// project(':elgin-printer').projectDir = file('../node_modules/react-native-ideploy-tef-elgin/android/libs/hom/elgin-printer')
```

## Usage

```js
import React, { useEffect } from 'react';
import {
  DeviceEventEmitter
} from 'react-native';
import {
  onInitTef,
  configTef,
  payDeb,
  payCred,
  payPix,
  onCancel
} from 'react-native-ideploy-tef';

const App = () => {
  useEffect(() => {
    // Initialize TEF
    onInitTef();

    const eventTef = DeviceEventEmitter.addListener('ideploy.tef', event => {
      console.log('#################################################');
      console.log(event);
      console.log('#################################################');
    });

    const eventErro = DeviceEventEmitter.addListener('ideploy.tef.erro', event => {
      console.log('#################################################');
      console.log(event);
      console.log('#################################################');
    });

    return () => {
      eventTef.remove();
      eventErro.remove();
    };
  }, []);

  // Configure TEF
  configTef({
    name: 'YourAppName',
    version: '1.0.0',
    pinpad: 'YourPinpadConfig',
    doc: 'YourDoc'
  });

  // Make a debit payment
  payDeb(1000); // value in cents

  // Make a credit payment
  payCred(1000, 'type', 'installments'); // value in cents

  // Make a PIX payment
  payPix(1000); // value in cents

  // Cancel a transaction
  onCancel();

  return (
    // ...existing code...
  );
};

export default App;
```

## Configuration

The `IConfigTef` type includes the following properties:

- `name`: string - The name of the configuration.
- `version`: string - The version of the configuration.
- `pinpad`: string - The pinpad configuration.
- `doc`: string - The documentation for the configuration.

## Logs

Logs and events will be emitted via `DeviceEventEmitter` with the event names `ideploy.tef` and `ideploy.tef.erro`.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
