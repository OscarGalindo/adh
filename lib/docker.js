const Rx = require("rxjs");
const dockerode = require('dockerode');
const docker = dockerode();

exports.container = function (containerId) {
  return docker.getContainer(containerId);
};

exports.listContainers = () => {
  return Rx.Observable.fromPromise(docker.listContainers());
};

exports.stopContainer = (container) => {
  return container.stop();
};