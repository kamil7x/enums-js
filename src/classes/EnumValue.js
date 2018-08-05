export default class EnumValue {
  value;
  ordinal;

  constructor(value, ordinal) {
    this.value = value;
    this.ordinal = ordinal;
    Object.freeze(this);
  }

  toString() {
    return this.value;
  }

  valueOf() {
    return this.value;
  }
}