import { Command } from 'commander'
import { cli } from '../src/cli'

export async function runCli(args: string[]) {
  const cmd = new Command()
  cli(cmd)

  return cmd.parseAsync(args, { from: 'user' })
}
