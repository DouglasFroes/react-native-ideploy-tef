const IdeployTef = require('./NativeIdeployTef').default;

export function onInitTef(): void {
  IdeployTef.onInitTef();
}

type IConfigTef = {
  name: string;
  version: string;
  pinpad: string;
  doc: string;
};

export function configTef({ name, version, pinpad, doc }: IConfigTef): void {
  IdeployTef.configTef(name, version, pinpad, doc);
}

export function payDeb(value: number): void {
  let valueToString = (value / 100).toFixed(2).toString();

  IdeployTef.payDeb(valueToString);
}

export function payCred(
  value: number,
  type: string,
  installments: string
): void {
  let valueToString = (value / 100).toFixed(2).toString();

  IdeployTef.payCred(valueToString, type, installments);
}

export function payPix(value: number): void {
  let valueToString = (value / 100).toFixed(2).toString();

  IdeployTef.payPix(valueToString);
}

export function onCancel(): void {
  IdeployTef.onCancel();
}
