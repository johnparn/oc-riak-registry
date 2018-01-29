'use strict';
const oc = require('oc');
const riak = require('oc-riak-storage-adapter');

let conf = {
  verbosity: 5, // 
  baseUrl: 'http://localhost:3333', // Registry URL
  port: 3333, // Registry port - must match the port of the baseUrl
  tempDir: './temp/',
  refreshInterval: 600,
  pollingInterval: 5,
  templates: [require('oc-template-react'), require('oc-template-jade')],
  storage: {
    adapter: riak,
    options: {
      key: 'GPF2QH59SKK8R29ZBVPZ', // Access key
      secret: 'I6IXIZ_Dv3MhFBrtc3KCIcNZzlnd3uFDN1Ka9g==', // Secret key
      bucket: 'foo',
      region: 'us-east-1',
      componentsDir: 'components',
      signatureVersion: 'v2', // Use v2 for RiakCS
      sslEnabled: false,
      path: '//localhost:8080/foo/', // Used when requesting oc-client and/or components for preview in web interface
      s3ForcePathStyle: true, // Necessary to get the path right - will not prefix the bucket to the domain name but add it as part of the URL path
      debug: true, // Log what AWS-SDK is up to to stdout 
      // Override endpoint, this is passed straight to AWS.Endpoint constructor - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Endpoint.html 
      endpoint: 'http://localhost:8080'
    }    
  },
  env: { name: 'production' }
};

let registry = new oc.Registry(conf);

registry.start(function(err, app){
  if(err) {
    console.log('Registry not started: ', err);
    process.exit(1);
  }
});

