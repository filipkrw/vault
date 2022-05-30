function tunnel($port) {
  $expr = "lt --port $($port)"
  Invoke-Expression $expr
}

function git:reset-branch-remote($branch) {
  $expr = "git fetch origin
git reset --hard origin/$($branch)"
  Invoke-Expression $expr
}

function git:reset-file($file) {
  $expr = "git checkout HEAD -- $($file)"
  Invoke-Expression $expr
}

function exec:it($container, $command) {
  $expr = "docker exec -it $($container) $($command)"
  Invoke-Expression $expr
}

function platform:up() {
  $expr = "docker compose -f example-docker-compose.local.yml up $($args)"
  Invoke-Expression $expr
}

function platform:build() {
  $expr = "docker compose -f example-docker-compose.local.yml build $($args)"
  Invoke-Expression $expr
}

function git:current() {
  $expr = "git rev-parse --abbrev-ref HEAD"
  Invoke-Expression $expr
}