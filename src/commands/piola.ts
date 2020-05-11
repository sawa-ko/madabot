import { ClassCommand, Command, CommandMessage } from '@typeit/discord';
import * as logger from 'logdc';

export abstract class Piola implements ClassCommand {
  @Command('Piola', {
    description:
      'Se manda una imagen piola al usuario, proximamente mas imagenes.',
    infos: 'Diversión',
  })
  async execute(command: CommandMessage) {
    const piolaImagenes = [
      'https://cdn.discordapp.com/attachments/439565065692381185/709485018249953290/96372787_1638472422981491_2094174148849827840_o.png',
    ];

    command.reply('Espera mientras cargo una foto bien piola para ti...');

    command
      .reply('Mira que piola esta esto **¡LA PUTA MADRE!**', {
        files: [piolaImagenes[0]],
      })
      .catch((error) => {
        logger.br();
        logger.error(
          `No se pudo enviar el mensaje al canal ${command.channel.id} porque ha ocurrido un error.`,
        );
        logger.error(error.message);
        logger.br();
      });
  }
}
