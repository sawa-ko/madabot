import { Discord, CommandNotFound, CommandMessage } from '@typeit/discord';
import { join } from 'path';

import { Help } from '../commands';

@Discord({
  prefix: '-m',
  importCommands: [join(__dirname, '..', 'commands', '*.ts'), Help],
})
export class DiscordApp {
  @CommandNotFound({ prefix: '-m' })
  notFoundA(command: CommandMessage) {
    command.reply(
      'Lo siento pero no tengo este comando Wacho, prueba ``-mdb --help`` para ver mis comandos.',
    );
  }
}