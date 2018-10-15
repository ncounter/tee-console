// wrap and re-implement default console methods
const myConsole = (function(defaultConsole){
  const clonedConsole = Object.assign({}, defaultConsole);

  let myConsoleAction = () => {};

  clonedConsole.setMyConsoleAction = function(f) {
    myConsoleAction = f;
  }
  clonedConsole.log = function(message){
    defaultConsole.log(message);
    myConsoleAction('[Tee-console - Log]: ' + message);
  }
  clonedConsole.info = function (message) {
    defaultConsole.info(message);
    myConsoleAction('[Tee-console - Info]: ' + message);
  }
  clonedConsole.warn = function (message) {
    defaultConsole.warn(message);
    myConsoleAction('[Tee-console - Warning]: ' + message);
  }
  clonedConsole.error = function (message) {
    defaultConsole.error(message);
    myConsoleAction('[Tee-console - Error]: ' + message);
  }

  return clonedConsole;
}(window.console));

// Override the existing default console
window.console = myConsole;