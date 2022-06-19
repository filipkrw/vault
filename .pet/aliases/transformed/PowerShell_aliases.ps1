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

function :() {
  $expr = "pet $($args) -hs snippets"
  Invoke-Expression $expr
}

function git:squash($commit) {
  $expr = "# https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git
# $($commit) can be a commit hash or HEAD~n, where n is a number of previous commits
# Last specified commit is not included

git reset --soft $($commit)
git commit
"
  Invoke-Expression $expr
}

function git:list:until($commit_hash) {
  $expr = "git log HEAD...$($commit_hash) --oneline --no-decorate --format='(%an) %B'"
  Invoke-Expression $expr
}