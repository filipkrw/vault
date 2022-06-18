function exec:it($container, $command) {
  $expr = "docker exec -it $($container) $($command)"
  Invoke-Expression $expr
}

function platform:up() {
  $expr = "docker compose -f docker-compose.example.local.yml up $($args)"
  Invoke-Expression $expr
}

function platform:build() {
  $expr = "docker compose -f docker-compose.example.local.yml build $($args)"
  Invoke-Expression $expr
}

function git:current() {
  $expr = "git rev-parse --abbrev-ref HEAD"
  Invoke-Expression $expr
}

function git:reset:remote($branch) {
  $expr = "git fetch origin $($branch)
git reset --hard origin/$($branch)"
  Invoke-Expression $expr
}

function git:reset:file($file) {
  $expr = "git checkout HEAD -- $($file)"
  Invoke-Expression $expr
}

function git:revert:last() {
  $expr = "git reset HEAD~"
  Invoke-Expression $expr
}

function git:pick($commit_hash_from_another_branch) {
  $expr = "git cherry-pick $($commit_hash_from_another_branch)"
  Invoke-Expression $expr
}

function :s() {
  $expr = "pet $($args) -hs snippets"
  Invoke-Expression $expr
}