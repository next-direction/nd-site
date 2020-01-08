import Vue from 'vue';

function hexToRgba (hex, a) {

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', ' + a + ')' : hex;
}

Vue.filter('hexToRgba', hexToRgba);

Vue.prototype.$filters = Vue.options.filters;
