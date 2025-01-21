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

## Usage

```js
import React, { useEffect } from 'react';
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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
