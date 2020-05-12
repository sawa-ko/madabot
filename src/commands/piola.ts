import { ClassCommand, Command, CommandMessage } from '@typeit/discord';
import * as logger from 'logdc';

export abstract class Piola implements ClassCommand {
  @Command('Piola', {
    description:
      'Se manda una imagen piola al usuario, proximamente mas imagenes.',
    infos: 'Diversión',
  })
  async execute(command: CommandMessage) {
    /*
     * Agregar mas imagenes piolas al Array
     */
    const piolaImagenes = [
      'https://cdn.discordapp.com/attachments/439565065692381185/709485018249953290/96372787_1638472422981491_2094174148849827840_o.png',
      'https://images-ext-2.discordapp.net/external/MfBrBOBVwq31Llq2_hT9NKT9GvTwM8ISVu_90H8BLi8/https/imgur.com/KoCvbuV.gif',
      'https://cdn.discordapp.com/attachments/439565065692381185/709232832144474144/rompe.mp4',
      'https://media.tenor.com/images/037108957a022c3621bf451080888d66/tenor.gif',
    ];

    command.channel.send('Espera mientras cargo algo bien piola para ti...');
    command
      .reply('Mira que piola esta esto **¡LA PUTA MADRE!**', {
        files: [
          piolaImagenes[Math.floor(Math.random() * piolaImagenes.length)],
        ],
      })
      .then(() => {
        logger.info(
          `Se ha enviado una imagen piola al canal ${command.channel.id} para el usuario ${command.author.username}.`,
        );
      })
      .catch((error) => {
        command.reply('Lo siento bro, no he podido cargar algo piola para ti.');
        logger.br();
        logger.error(
          `No se pudo enviar el mensaje de algo piola al canal ${command.channel.id} porque ha ocurrido un error.`,
        );
        logger.error(error.message);
        logger.br();
      });
  }
}
