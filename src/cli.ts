#!/usr/bin/env node

import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { Command } from 'commander'
import packageJson from '../package.json'

export function cli(cmd: Command) {
  cmd
    .name('sirena')
    .summary('Simple release orchestration tool for Node.js projects.')
    .description(
      `Sirena (Simple Release Node.js App) is a lightweight CLI for orchestrating releases in Node.js projects.
It automates versioning, changelog generation, git commits, tagging, and remote pushes, streamlining your release workflow.`
    )
    .version(packageJson.version)

  cmd
    .command('release')
    .summary(
      'Run the full release workflow including version bump, changelog, commit, tag, and push.'
    )
    .description(
      'Run a full release workflow: version bump, changelog update, commit, tag, and push. Highly configurable for mono-repos and partial releases.'
    )
    .option('--affected', 'Only release affected packages (useful for mono-repos)')
    .option('--recursive', 'Recursively process dependencies')
    .option('--since <since>', 'Release changes since this git reference')
    .option('--until <until>', 'Release changes up to this git reference')
    .option('-y, --yes', 'Automatic yes to all prompts')
    .option('--no-version', 'Skip version bump during release')
    .option('--no-changelog', 'Skip changelog update during release')
    .option('--no-commit', 'Do not create a commit for the release')
    .option('--no-tag', 'Do not create a git tag for the release')
    .option('--no-push', 'Do not push changes to the remote repository')
    .argument('[target...]', 'Target package(s) or directories to release')
    .action(() => {
      // TODO: Implement release workflow
      console.log('Creating a new release...')
    })

  cmd
    .command('version')
    .summary('Bump project/package version using semver or an exact value.')
    .description(
      'Bump the project version. Supports standard semver increments (major, minor, patch) or an exact version. Optionally pre-release.'
    )
    .argument(
      '<type|exact>',
      'Version bump type (major, minor, patch, premajor, etc.) or exact version'
    )
    .option('--preid <identifier>', 'Pre-release identifier (e.g., beta)')
    .option('--no-commit', 'Do not create a commit for the version bump')
    .option('--no-tag', 'Do not create a git tag for the version')
    .argument('[target...]', 'Target package(s) or directories to version')
    .action(() => {
      // TODO: Implement version bump logic
      console.log('Updating the project version...')
    })

  cmd
    .command('changelog')
    .summary('Generate or update changelog from recent git history.')
    .description(
      'Generate or update the changelog for recent changes. Can filter by git references and output to a file.'
    )
    .option('--since <since>', 'Include changes since this git reference')
    .option('--until <until>', 'Include changes up to this git reference')
    .option('--output <output>', 'Output changelog to this file')
    .argument('[target...]', 'Target package(s) or directories for changelog')
    .action(() => {
      // TODO: Implement changelog generation logic
      console.log('Generating or updating the changelog...')
    })

  cmd
    .command('commit')
    .summary('Create a git commit for release-related changes.')
    .description(
      'Create a git commit with changes from the release process. Allows custom commit messages.'
    )
    .option('-m, --message <message>', 'Custom commit message')
    .argument('[target...]', 'Target package(s) or directories for commit')
    .action(() => {
      // TODO: Implement commit creation logic
      console.log('Creating a new commit for the release...')
    })

  cmd
    .command('tag')
    .summary('Create and optionally push a git tag for the release.')
    .description(
      'Create a git tag for the release. Optionally push the tag to the remote repository.'
    )
    .argument('<tag>', 'Tag name to create')
    .option('--push', 'Push the created tag to remote')
    .argument('[target...]', 'Target package(s) or directories for tagging')
    .action(() => {
      // TODO: Implement tag creation logic
      console.log('Creating a new tag for the release...')
    })

  cmd
    .command('push')
    .summary('Push commits and tags to a remote repository.')
    .description(
      'Push committed changes and tags to the remote repository. Specify the remote if needed.'
    )
    .option('--remote <remote>', 'Remote repository name (default: origin)')
    .action(() => {
      // TODO: Implement push logic
      console.log('Pushing the changes to the remote repository...')
    })

  cmd.commands.forEach(_c => {
    _c.option('--dry-run', 'Show what would be done without making changes')
  })
}

const cmd = new Command()
cli(cmd)

// only parse if program run directly, not imported
if (process.argv[1] === fileURLToPath(import.meta.url)) cmd.parseAsync(process.argv)
