# Extra commands for docker

  Usage: adh [options] [command]


  Commands:

    remove-containers       Remove all containers -> docker rm -f $(docker ps -a -q)
    remove-images           Remove all images -> docker rmi -f $(docker images -q)
    remove-volumes          Remove all named volumes -> docker volume rm $(docker volume ls -qf dangling=true)
    create-local-registry   Create a local registry -> docker run -d -p 5000:5000 --restart=always --name local-registry registry:2

  Options:

    -h, --help     output usage information
    -V, --version  output the version number