// wrap and re-implement default console methods
const myConsole = (function(defaultConsole){
  let myConsoleAction = () => {};
  return {
    setMyConsoleAction: function(f) {
      myConsoleAction = f;
    },
    log: function(message){
      defaultConsole.log(message);
      myConsoleAction('[Tee-console - Log]: ' + message);
    },
    info: function (message) {
      defaultConsole.info(message);
      myConsoleAction('[Tee-console - Info]: ' + message);
    },
    warn: function (message) {
      defaultConsole.warn(message);
      myConsoleAction('[Tee-console - Warning]: ' + message);
    },
    error: function (message) {
      defaultConsole.error(message);
      myConsoleAction('[Tee-console - Error]: ' + message);
    }
  };
}(window.console));

// Override the existing default console
window.console = myConsole;