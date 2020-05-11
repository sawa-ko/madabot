import { ClassCommand, Command, CommandMessage } from '@typeit/discord';
import { MessageEmbed } from 'discord.js';
import * as logger from 'logdc';

import { EmbedColors } from '../util/embed/colors';

export abstract class Help implements ClassCommand {
  @Command('Help', {
    description: 'Muestra los comandos disponibles para del Bot.',
    infos: 'Ayuda para el usuario',
  })
  async execute(command: CommandMessage) {
    const embed = new MessageEmbed();

    let helpMessage = '';
    helpMessage += '🎩 **-mhelp** -- Para ver esta ayuda maravillosa. \n';
    helpMessage +=
      '🕵🏼 **-mpiola** -- Te mando una imagen bien pinche piola. \n';
    helpMessage +=
      '🤳🏻 **-mavatar** -- ¿Quieres el avatar de ese usuario? Bien, solo usa este comando. \n';

    embed.setAuthor('👨🏻‍💻 MadaBot - @madabot#8925 | Un bot muy piola');
    embed.setTitle('Mis comandos son estos');
    embed.setDescription(helpMessage);
    embed.setImage(command.author.avatarURL());
    embed.setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)]);
    command.channel.send(embed).catch((error) => {
      logger.br();
      logger.error(
        `No se pudo enviar el mensaje al canal ${command.channel.id} porque ha ocurrido un error.`,
      );
      logger.error(error.message);
      logger.br();
    });
  }
}
