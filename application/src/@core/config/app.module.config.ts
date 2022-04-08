import { ConfigModuleOptions } from '@nestjs/config';

// Disponibiliza o arquivo .env no contexto do NestJs que pode ser utilizado através do process.env ou o ConfigService provido pelo NesJs
export function getConfigServiceConfiguration(): ConfigModuleOptions {
  return {
    isGlobal: true,
    envFilePath: ['.env.local', '.env', '.env.prod'],
    load: [
      () => ({
        DEBUG: process.env.DEBUG === 'true' ? true : false,
      }),
    ],
  };
}
