export interface ContactProps {}
export interface formItems extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  tel: HTMLInputElement;
}
export interface formElements extends HTMLFormElement {
  elements: formItems;
}
export interface valuesInterface {
  name: string;
  lastName: string;
  email: string;
  tel: string;
}
