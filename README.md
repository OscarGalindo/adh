
  Usage: adh [options] [command]


  Commands:

    remove-containers          Remove all containers -> docker ps -aq | awk '{print $1} | xargs docker rm -f'
    remove-images              Remove all images -> docker rmi -f $(docker images -q)
    remove-none-images         Remove none images -> docker images | grep "^<none>" | awk '{print $3}' | xargs -I {} --no-run-if-empty docker rmi {} || true
    remove-exited-containers   Remove exited containers -> docker rm $(docker ps -q -f status=exited)
    remove-volumes             Remove all named volumes -> docker volume rm $(docker volume ls -qf dangling=true)
    kill-containers            Kill all containers -> docker ps -aq | awk '{print $1} | docker kill'
    create-local-registry      Create a local registry -> docker run -d -p 5000:5000 --restart=always --name local-registry registry:2

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

