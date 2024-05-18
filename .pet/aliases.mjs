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
      noVariableSubstitution: true,
    },
    {
      alias: "w",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-",
      },
    },
    {
      alias: "r",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-",
      },
    },
    {
      alias: "migration-date",
      source: {
        type: "note",
        relativePath: "snippets/algomo/dbMigrationDateString",
      },
    },
    {
      alias: "git:delete:remote",
      source: {
        type: "note",
        relativePath: "snippets/git/deleteRemoteBranch",
      },
    },
    {
      alias: "git:delete:local",
      source: {
        type: "note",
        relativePath: "snippets/git/deleteLocalBranch",
      },
    },
    {
      alias: "git:case-rename",
      source: {
        type: "note",
        relativePath: "snippets/git/renameFileCaseSensitive",
      },
    },
    {
      alias: "gen:server",
      source: {
        type: "inline",
        content: "docker exec server yarn workspace @algomo/server gen:all",
      },
    },
    {
      alias: "d:rb",
      source: {
        type: "note",
        relativePath: "snippets/docker/composeBuildAndUp",
      },
    },
    {
      alias: "d:rs",
      source: {
        type: "inline",
        content:
          "docker stop <container> && docker compose up <container> <args*>",
      },
    },
    {
      alias: "test:server",
      source: {
        type: "inline",
        content:
          "docker exec server yarn workspace @algomo/server test <args*>",
      },
    },
    {
      alias: "regen:ps",
      source: {
        type: "inline",
        content:
          "docker exec server yarn workspace @algomo/server gen:all && docker restart platform & docker restart server",
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
      alias: "curl:headers",
      source: {
        type: "note",
        relativePath: "snippets/curlHeadersOnly",
      },
    },
    {
      alias: "proxy",
      source: {
        type: "inline",
        content: "ssh proxy -R 8080:localhost:<port>",
      },
    },
    {
      alias: "proxyo",
      source: {
        type: "inline",
        content:
          'tmux new-session -d -s proxy "ssh proxy -R 8080:localhost:<port>"',
      },
    },
    {
      alias: "proxyc",
      source: {
        type: "inline",
        content: "tmux kill-session -t proxy",
      },
    },
    {
      alias: "proxya",
      source: {
        type: "inline",
        content: "tmux attach-session -t proxy",
      },
    },
    {
      alias: "proxys",
      source: {
        type: "inline",
        content: "tmux list-sessions 2>&1 | grep proxy",
      },
    },
  ],
};
