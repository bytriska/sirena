import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { runCli } from './util'

describe('cli', () => {
  let consoleLog: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    consoleLog = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleLog.mockRestore()
  })

  it('should run `release` command with options', async () => {
    await runCli([
      'release',
      '--affected',
      '--recursive',
      '--since',
      'v1.0.0',
      '--until',
      'v2.0.0',
      '-y',
      '--no-version',
      '--no-changelog',
      '--no-commit',
      '--no-tag',
      '--no-push',
      '--dry-run',
      'pkg1',
      'pkg2',
    ])
    expect(consoleLog).toHaveBeenCalledWith('Creating a new release...')
  })

  it('should run "version" command with options', async () => {
    await runCli([
      'version',
      'minor',
      '--preid',
      'beta',
      '--no-commit',
      '--no-tag',
      '--dry-run',
      'pkg1',
    ])
    expect(consoleLog).toHaveBeenCalledWith('Updating the project version...')
  })

  it('should run "changelog" command with options', async () => {
    await runCli([
      'changelog',
      '--since',
      'v1.0.0',
      '--until',
      'v2.0.0',
      '--output',
      'CHANGELOG.md',
      'pkg1',
    ])
    expect(consoleLog).toHaveBeenCalledWith('Generating or updating the changelog...')
  })

  it('should run "commit" command with options', async () => {
    await runCli(['commit', '-m', 'Release commit', 'pkg1'])
    expect(consoleLog).toHaveBeenCalledWith('Creating a new commit for the release...')
  })

  it('should run "tag" command with options', async () => {
    await runCli(['tag', 'v2.0.0', '--push', 'pkg1'])
    expect(consoleLog).toHaveBeenCalledWith('Creating a new tag for the release...')
  })

  it('should run "push" command with options', async () => {
    await runCli(['push', '--remote', 'origin'])
    expect(consoleLog).toHaveBeenCalledWith('Pushing the changes to the remote repository...')
  })
})
