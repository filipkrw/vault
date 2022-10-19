module.exports = {
  textEditor: "nvim",
  aliases: [
    {
      alias: "exec:it",
      relativePath: "snippets/docker/execInteractive",
    },
    {
      alias: "git:current",
      relativePath: "snippets/git/getCurrentBranchName",
    },
    {
      alias: "git:reset:file",
      relativePath: "snippets/git/resetFile",
    },
    {
      alias: "git:pick",
      relativePath: "snippets/git/cherryPick",
    },
    {
      alias: "git:squash",
      relativePath: "snippets/git/squash",
    },
    {
      alias: "git:uncommit",
      relativePath: "snippets/git/revertLastCommit",
    },
    {
      alias: "git:unfuck",
      relativePath: "snippets/git/resetBranchToRemote",
    },
    {
      alias: "exec:sh",
      relativePath: "snippets/docker/execSh",
    },
    {
      alias: "exec:bash",
      relativePath: "snippets/docker/execBash",
    },
    {
      alias: "git:remote:delete",
      relativePath: "snippets/git/deleteRemoteBranch",
    },
    {
      alias: "chmodock:get",
      relativePath: "snippets/bash/getChmodNumerical",
    },
    {
      alias: "git:rebase",
      relativePath: "snippets/docker/squashAndRebase",
    },
    {
      alias: "dock:up",
      relativePath: "snippets/docker/composeUp",
    },
    {
      alias: "dock:build",
      relativePath: "snippets/docker/composeBuild",
    },
    {
      alias: "dock:stop",
      relativePath: "snippets/docker/stop",
    },
    {
      alias: "dock:restart",
      relativePath: "snippets/docker/stopAndComposeUp",
    },
    {
      alias: "dock:rebuild",
      relativePath: "snippets/docker/composeBuildAndUp",
    },
  ],
};
