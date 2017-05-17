# ADH: Docker 'Useful Commands' Helper


##  Description

> This package will help you working with Docker. 
    

##  Installation

    npm install -g adh
  
## Usage

```
$ adh --help

  Commands:

    nginx [options]            Run nginx with a volume in the current directory 
    stop [options]             Stop containers
    ps                         Formatted ps for running dockers -> docker ps --format 'table {{.ID}}    {{.Names}}      {{.Image}}      {{.Status}}     {{.Ports}}'
    ps-a|psa                   Formatted ps for all dockers -> docker ps -a --format 'table {{.ID}}     {{.Names}}      {{.Image}}      {{.Status}}     {{.Ports}}'
    remove-containers|rc       Remove all containers -> docker ps -aq | awk '{print $1}' | xargs docker rm -f
    remove-images|ri           Remove all images -> docker rmi -f $(docker images -q)
    remove-none-images         Remove none images -> docker images | grep "^<none>" | awk '{print $3}' | xargs -I {} --no-run-if-empty docker rmi {} || true
    remove-exited-containers   Remove exited containers -> docker ps -q -f status=exited | xargs -I {} --no-run-if-empty docker rm {} || true
    remove-volumes             Remove all named volumes -> docker volume rm $(docker volume ls -qf dangling=true)
    kill-containers|kc         Kill all containers -> docker kill $(docker ps -q)
    create-local-registry      Create a local registry -> docker run -d -p 5000:5000 --restart=always --name local-registry registry:2

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

<img src="adh_stop.gif" width="500">

  Stop containers

  Options:

    -h, --help  output usage information
    -a, --all  Stop all containers
