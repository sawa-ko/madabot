import { ClassCommand, Command, CommandMessage } from '@typeit/discord';
import { MessageEmbed } from 'discord.js';
import * as logger from 'logdc';

import { EmbedColors } from '../util/embed/colors';

export abstract class Avatar implements ClassCommand {
  @Command('Avatar', {
    description:
      'Muestra la foto de perfil que tiene el usuario seleccionado en el mensaje.',
    infos: 'Saqueo',
  })
  async execute(command: CommandMessage) {
    const userSelected = command.mentions.users.first() || command.author;
    const embedMessage = new MessageEmbed();
    embedMessage.setAuthor('👨🏻‍💻 MadaBot - @madabot#8925 | Un bot muy piola');
    embedMessage.setTitle(`Foto de perfil de ${userSelected.tag}`);
    embedMessage.setDescription(
      'Recuerda que solo tienes que dar clic a la foto y presionar el boton de descargar / ver imagen original.',
    );
    embedMessage.setImage(userSelected.avatarURL());
    embedMessage.setColor(
      EmbedColors[Math.floor(Math.random() * EmbedColors.length)],
    );

    command.channel
      .send(embedMessage)
      .then(() => {
        logger.info(
          `Se obtuvo el avatar del usuario ${userSelected.tag} y fue enviado en el canal ${command.channel.id} para el usuario ${command.author.tag}.`,
        );
      })
      .catch((error) => {
        command.reply(
          `No he podido obtener el avatar de ${userSelected.tag}. Por favor intentalo de nuevo bro.`,
        );
        logger.br();
        logger.error(
          `No se pudo obtener el avatar del usuario ${userSelected.tag} para el canal ${command.channel.id} solicitado por usuario ${command.author.tag} porque un error.`,
        );
        logger.error(error.message);
        logger.br();
      });
  }
}
