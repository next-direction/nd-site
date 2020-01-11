import { toCamelCase, toUpperCamelCase } from '~/plugins/filters';

export default ({ app }, inject) => {
  inject('toCamelCase', toCamelCase);
  inject('toUpperCamelCase', toUpperCamelCase);
}
