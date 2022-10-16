module.exports = {
  sources: [
    {
      relativePath: "snippets",
    },
    {
      relativePath: "cheatsheets",
    },
    {
      relativePath: "links",
    },
    {
      relativePath: "helpers",
    },
  ],
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
      alias: "git:reset:remote",
      relativePath: "snippets/git/resetBranchToRemote",
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
      alias: "git:list:until",
      relativePath: "snippets/git/listCommitMessagesUntilCommit",
    },
    {
      alias: "git:uncommit",
      relativePath: "snippets/git/revertLastCommit",
    },
  ],
};
