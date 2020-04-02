import EnumValue from './EnumValue';

export default class Enum {
  constructor(...entries) {
    if (!entries.length) throw new Error('No values passed to Enum');

    let autoValue = 0;
    entries.map((value, index) => {
      const [key, val = key] = typeof value === 'string' ? [value, autoValue] : value;
      const fieldName = String(key).toUpperCase();

      if (typeof val === 'number') {
        autoValue = val + 1;
      }

      this[fieldName] = new EnumValue(val, index);
    });

    Object.freeze(this);
  }

  keys() {
    return Object.keys(this);
  }
}
