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
      noVariableSubstitution: true,
    },
    {
      alias: "alg-1672",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1672",
      },
    },
    {
      alias: "alg-1672:get",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1672",
      },
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
      alias: "w1712",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1712",
      },
    },
    {
      alias: "r1712",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1712",
      },
    },
    {
      alias: "w1704",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1704",
      },
    },
    {
      alias: "r1704",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1704",
      },
    },
    {
      alias: "w1714",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1714",
      },
    },
    {
      alias: "r1714",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1714",
      },
    },
    {
      alias: "walex",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-alex",
      },
    },
    {
      alias: "ralex",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-alex",
      },
    },
    {
      alias: "w1720",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1720",
      },
    },
    {
      alias: "r1720",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1720",
      },
    },
    {
      alias: "w1781",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1781",
      },
    },
    {
      alias: "r1781",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1781",
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
      alias: "test:server",
      source: {
        type: "inline",
        content: "docker exec server yarn workspace @algomo/server test <args*>",
      },
    },
    {
      alias: "w1790",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1790",
      },
    },
    {
      alias: "r1790",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1790",
      },
    },
    {
      alias: "w1705",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1705",
      },
    },
    {
      alias: "r1705",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1705",
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
      alias: "w14.7",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-14.7",
      },
    },
    {
      alias: "r14.7",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-14.7",
      },
    },
    {
      alias: "walg",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-alg",
      },
    },
    {
      alias: "ralg",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-alg",
      },
    },
    {
      alias: "whubpop",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-hubpop",
      },
    },
    {
      alias: "rhubpop",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-hubpop",
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
      alias: "w1703",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1703",
      },
    },
    {
      alias: "r1703",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1703",
      },
    },
    {
      alias: "w1829",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1829",
      },
    },
    {
      alias: "r1829",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1829",
      },
    },
    {
      alias: "d:re",
      source: {
        type: "note",
        relativePath: "snippets/docker/composeBuildAndUp",
      },
    },
    {
      alias: "w1863",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1863",
      },
    },
    {
      alias: "r1863",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1863",
      },
    },
    {
      alias: "w1887",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1887",
      },
    },
    {
      alias: "r1887",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1887",
      },
    },
    {
      alias: "w1853",
      source: {
        type: "inline",
        content: "pet dc daily -t algomo ALG-1853",
      },
    },
    {
      alias: "r1853",
      source: {
        type: "inline",
        content: "pet df -t algomo ALG-1853",
      },
    },
  ],
};