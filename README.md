# Dependency Update Demo

This demo project uses a [GitHub Action](https://github.com/bitdev-community/dependency-update-demo/blob/main/.github/workspaces/dependency-update.yml) to check for outdated `env` dependencies.

```
name: Bit Dependency Update
on:
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:
permissions:
  pull-requests: write
  contents: write
jobs:
  check-for-updates:
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      GIT_USER_NAME: ${{ secrets.GIT_USER_NAME }}
      GIT_USER_EMAIL: ${{ secrets.GIT_USER_EMAIL }}
      BIT_CONFIG_USER_TOKEN: ${{ secrets.BIT_CONFIG_USER_TOKEN }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Initialize Bit
        uses: bit-tasks/init@v1
      - name: Bit Update Dependencies
        uses: bit-tasks/dependency-update@v1
        with:
          allow: 'all'
```
