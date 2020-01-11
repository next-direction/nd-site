import Vue from 'vue';

function hexToRgba (hex, a) {

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', ' + a + ')' : hex;
}

export function toCamelCase (str) {
  return str.replace(
    /([_][a-z])/g,
    (group) => group.toUpperCase()
      .replace('_', ''),
  );
}

export function toUpperCamelCase (str) {
  str = toCamelCase(str);

  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

Vue.filter('hexToRgba', hexToRgba);
Vue.filter('toCamelCase', toCamelCase);

Vue.prototype.$filters = Vue.options.filters;
