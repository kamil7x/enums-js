import EnumValue from './EnumValue';

export default class Enum {
  constructor(...values) {
    if (!values.length) throw new Error('No values passed to Enum');

    values.map((value, index) => {
      const fieldName = String(value).toUpperCase();
      this[fieldName] = new EnumValue(value, index);
    });

    Object.freeze(this);
  }

  keys() {
    return Object.keys(this);
  }
}