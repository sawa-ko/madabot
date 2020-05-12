import { Client } from '@typeit/discord';
import * as logger from 'logdc';
import 'reflect-metadata';

import './util/dotenv/config';

export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static async start() {
    this._client = new Client();
    await this._client
      .login(process.env.TOKEN, `${__dirname}/bot/*.ts`)
      .then(() => {
        logger.success(
          'Hola humano, soy @madabot y ahora estoy vivo, que piola.',
        );
        logger.info('Mis comados son los siguientes:');
        logger.br();
        logger.info(Client.getCommands());
        logger.br();
        logger.success('Ya puedes usarme Bro, buen provecho.');
        logger.br();
      })
      .catch((error) => {
        logger.error(
          `No puede ser, un error no me deja revivir. Revisalo y reparalo.`,
        );
        logger.error(error.message);
      });
  }
}
Main.start();
