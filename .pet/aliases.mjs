export default {
  aliases: [
    {
      alias: "exec:it",
      source: {
        type: "note",
        relativePath: "snippets/docker/execInteractive",
      },
    },
    {
      alias: "git:current",
      source: {
        type: "note",
        relativePath: "snippets/git/getCurrentBranchName",
      },
    },
    {
      alias: "git:reset:file",
      source: {
        type: "note",
        relativePath: "snippets/git/resetFile",
      },
    },
    {
      alias: "git:pick",
      source: {
        type: "note",
        relativePath: "snippets/git/cherryPick",
      },
    },
    {
      alias: "git:squash",
      source: {
        type: "note",
        relativePath: "snippets/git/squash",
      },
    },
    {
      alias: "git:uncommit",
      source: {
        type: "note",
        relativePath: "snippets/git/revertLastCommit",
      },
    },
    {
      alias: "git:unfuck",
      source: {
        type: "note",
        relativePath: "snippets/git/resetBranchToRemote",
      },
    },
    {
      alias: "exec:sh",
      source: {
        type: "note",
        relativePath: "snippets/docker/execSh",
      },
    },
    {
      alias: "exec:bash",
      source: {
        type: "note",
        relativePath: "snippets/docker/execBash",
      },
    },
    {
      alias: "git:remote:delete",
      source: {
        type: "note",
        relativePath: "snippets/git/deleteRemoteBranch",
      },
    },
    {
      alias: "d:up",
      source: {
        type: "note",
        relativePath: "snippets/docker/composeUp",
      },
    },
    {
      alias: "d:build",
      source: {
        type: "note",
        relativePath: "snippets/docker/composeBuild",
      },
    },
    {
      alias: "d:stop",
      source: {
        type: "note",
        relativePath: "snippets/docker/stop",
      },
    },
    {
      alias: "d:restart",
      source: {
        type: "note",
        relativePath: "snippets/docker/stopAndComposeUp",
      },
    },
    {
      alias: "d:reset",
      source: {
        type: "note",
        relativePath: "snippets/docker/composeBuildAndUp",
      },
    },
    {
      alias: "no_modules",
      source: {
        type: "note",
        relativePath: "snippets/bash/deleteNodeModulesRecursive",
      },
    },
    {
      alias: "chmod:get",
      source: {
        type: "note",
        relativePath: "snippets/bash/getChmodNumerical",
      },
    },
    {
      alias: "git:untrack",
      source: {
        type: "note",
        relativePath: "snippets/git/removeTrackedFileFromIndexGitignore",
      },
    },
    {
      alias: "k",
      source: {
        type: "note",
        relativePath: "snippets/k8s/minikubectl",
      },
    },
    {
      alias: "git:rename",
      source: {
        type: "note",
        relativePath: "snippets/git/renameCurrentBranchLocal",
      },
    },
    {
      alias: "git:rename:remote",
      source: {
        type: "note",
        relativePath: "snippets/git/renameCurrentBranchRemote",
      },
    },
    {
      alias: "idea",
      source: {
        type: "inline",
        content: "pet dc daily -t idea <args*>",
      },
    },
    {
      alias: "git+",
      source: {
        type: "inline",
        content: "git checkout -b <args*>",
      },
    },
    {
      alias: "boxbox",
      source: {
        type: "inline",
        content: "ssh <args*>",
      },
    },
    {
      alias: "create-ts-node",
      source: {
        type: "note",
        relativePath: "snippets/starters/createTypeScriptProject",
      },
    },
    {
      alias: "create-html",
      source: {
        type: "note",
        relativePath: "snippets/starters/createAndHostHtmlPage",
      },
    },
  ],
};