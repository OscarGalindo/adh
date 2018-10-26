# ADH: Docker 'Useful Commands' Helper


##  Description

> This package will help you working with Docker. 
    

##  Installation

    npm install -g adh
  
## Usage

```
$ adh --help

  Commands:

    mongo                           Run mongo
    nginx [options]            			Run nginx with a volume in the current directory 
    stop [options]             			Stop containers
    ps                         			Formatted ps for running dockers
    ps-a|psa                   			Formatted ps for all dockers
    remove-containers|rc       			Remove all containers
    remove-images|ri           			Remove all images
    remove-none-images         			Remove none images
    remove-exited-containers|rec   		Remove exited containers
    remove-volumes             			Remove all named volumes
    kill-containers|kc         			Kill all containers
    create-local-registry|clr			Create a local registry

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```


##  adh nginx [options]

  Run nginx with a volume in the current directory 

  Options:

    -h, --help         output usage information
    -f, --force        Force remove nginx container with same name
    -p, --port <port>  Host port. (Default: 8888)
    -n, --name <name>  Container name (Default: adh-nginx)

  Examples:

    $ adh nginx -p 8080 -n myNginx -f
    $ adh nginx -n myOtherNginx

##  adh stop [options]

  Stop containers

  Options:

    -h, --help  output usage information
    -a, --all  Stop all containers

<img src="adh_stop.gif" width="500">