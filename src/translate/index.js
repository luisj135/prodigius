if (!window.Intl) {
    window.Intl = require('intl') // polyfill for `Intl`
}
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat')
var IntlMessageFormat = require('intl-messageformat')

require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')

var rf = new IntlRelativeFormat('es')

var es = require('./es')
var en = require('./es-US')

var MESSAGES = {}
MESSAGES.es = es;
MESSAGES['es-US'] = en;

var locale = window.localStorage.locale || 'es';

module.exports = {
  message: function (text, options) {
    options = options || {}
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
    return msg.format(options);
  }
}




