# Extra commands for docker


  Usage: adh [options] [command]


  Commands:

    remove-containers       Remove all containers -> docker ps -aq | awk '{print $1} | xargs docker rm -f'
    remove-images           Remove all images -> docker rmi -f $(docker images -q)
    kill-containers         Kill all containers -> docker ps -aq | awk '{print $1} | docker kill'
    remove-volumes          Remove all named volumes -> docker volume rm $(docker volume ls -qf dangling=true)
    create-local-registry   Create a local registry -> docker run -d -p 5000:5000 --restart=always --name local-registry registry:2

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
