export default {
  options: {
    dir: 'docs',
    commit: true,
    push: true,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
    connectCommits: false
  },
  pages: {
    options: {
      remote: 'https://github.com/brunowego/gridit.git',
      branch: 'gh-pages'
    }
  }
};
