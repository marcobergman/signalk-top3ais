module.exports = function (app) {
  var plugin = {};

  plugin.id = 'signalk-top3ais';
  plugin.name = 'SignalK Top3AIS';
  plugin.description = 'Shows top 3 closest, moving AIS targets';

  plugin.start = function (options, restartPlugin) {
    // Here we put our plugin logic
    app.debug('Plugin started');
  };

  plugin.stop = function () {
    // Here we put logic we need when the plugin stops
    app.debug('Plugin stopped');
  };

  plugin.schema = {
    // The plugin schema
  };

  return plugin;
};

