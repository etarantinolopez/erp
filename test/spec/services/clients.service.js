'use strict';

describe('Service: clients.service', function () {

  // load the service's module
  beforeEach(module('erpApp'));

  // instantiate service
  var clients.service;
  beforeEach(inject(function (_clients.service_) {
    clients.service = _clients.service_;
  }));

  it('should do something', function () {
    expect(!!clients.service).toBe(true);
  });

});
