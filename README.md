
# Getting started 


## Install Riak as component storage

Install RiakCS as a Docker container:

``` 
docker run --env 'RIAK_CS_BUCKETS=foo,bar,baz' --publish '8080:8080' --name 'riak-cs' ianbytchek/riak-cs
```


Find out the id of the container.

``` 
docker ps | grep riak-cs
```


After a about a minute or two Riak should be upo running. Check the logs. In the very top you will find the access key and the secret key of the new RiakCS instance.

```
docker logs <containerid>
```


## Install the OC-registry

Open `index.js` and add the access and secret key just obtained from the log.

Install dependencies:

```
npm install
```

Start the registry:

```
npm start
```


Now you can start tinkering with the registry. The web interface is exposed at http://localhost:3333/. Check the OC documentation for further instructions how to create and publish components.

* https://github.com/opencomponents/oc/wiki/Getting-started
* https://github.com/opencomponents/oc/wiki/Publishing-to-a-registry

