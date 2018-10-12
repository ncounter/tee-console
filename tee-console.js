// wrap and re-implement default console methods
const myConsole = (function(defaultConsole){
  return {
    log: function(message){
      defaultConsole.log(message);
      alert('[Tee-console] Log: ' + message);
    },
    info: function (message) {
      defaultConsole.info(message);
      alert('[Tee-console] Info: ' + message);
    },
    warn: function (message) {
      defaultConsole.warn(message);
      alert('[Tee-console] Warning: ' + message);
    },
    error: function (message) {
      defaultConsole.error(message);
      alert('[Tee-console] Error: ' + message);
    }
  };
}(window.console));

// Override the existing default console
window.console = myConsole;