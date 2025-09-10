#!/usr/bin/env node

import process from 'node:process'
import { Command } from 'commander'
import packageJson from '../package.json'

function cli() {
  const program = new Command()

  program
    .name('sirena')
    .description('Sirena (Simple Release Nodejs App) is a release tool for Node.js projects.')
    .version(packageJson.version)

  program
    .command('release')
    .description('Create a new release')
    .action(() => {
      // Here you would implement the release logic
      console.log('Creating a new release...')
    })

  program
    .command('changelog')
    .description('Generate or update the changelog')
    .action(() => {
      // Here you would implement the changelog generation logic
      console.log('Generating or updating the changelog...')
    })

  program
    .command('version')
    .description('Update the version of the project')
    .action(() => {
      // Here you would implement the version update logic
      console.log('Updating the project version...')
    })

  program
    .command('commit')
    .description('Create a new commit for the release')
    .action(() => {
      // Here you would implement the commit creation logic
      console.log('Creating a new commit for the release...')
    })

  program
    .command('tag')
    .description('Create a new tag for the release')
    .action(() => {
      // Here you would implement the tag creation logic
      console.log('Creating a new tag for the release...')
    })

  program
    .command('push')
    .description('Push the changes to the remote repository')
    .action(() => {
      // Here you would implement the push logic
      console.log('Pushing the changes to the remote repository...')
    })

  program.parse(process.argv)
}

cli()
