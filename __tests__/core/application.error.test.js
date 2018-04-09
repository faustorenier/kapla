/* global it, expect */
import { createApplication, createComponent } from 'utils/setup';

const Foo = createComponent('foo'); // eslint-disable-line no-unused-vars
const app = createApplication();
const Bad = function Bad() {}; // eslint-disable-line no-empty-function

it('throws error on load', () => {
  function register() { // eslint-disable-line require-jsdoc
    app.register('foo', Bad);
  }

  expect(register).toThrow(/🤦/);
});

it('throws error on init', () => {
  Foo.prototype.init = null;
  function register() { // eslint-disable-line require-jsdoc
    app.register('foo', Foo);
  }

  expect(register).toThrow(/🤦/);
});

it('throws error on destroy', () => {
  Foo.prototype.destroy = null;
  function unload() { // eslint-disable-line require-jsdoc
    app.unload('foo');
  }

  expect(unload).toThrow(/🤦/);
});
