export async function  create(factoryOptions: {
    schema?: string
    username?: string;
    password?: string;
    ip_address?: string;
    database: number | string;
  }) {
    const { schema } = factoryOptions;
    switch (schema) {
      case 'geral':
        // load generated client for the given schema
  
        try {
            return new (await import('@thevoidtest/prisma-geral')).PrismaClient({ datasources: { db: { url: prepareUrl(factoryOptions) } } })
        } catch (error) {
          console.log(error);
          throw new Error(
            'Prisma geral package could not be loaded, if you want to use the prisma-geral client, please, install @test/prisma-geral',
          );
        }
  
      case 'tenant':
        // load generated client for the given schema
        try {
          return new (await import('@thevoidtest/prisma-tenant')).PrismaClient({ datasources: { db: { url: prepareUrl(factoryOptions) } } })
        } catch (error) {
          throw new Error(
            'Prisma geral package could not be loaded, if you want to use the prisma-geral client, please, install @test/prisma-geral',
          );
        }
      }
  }
  
  function prepareUrl({
    username,
    password,
    ip_address,
    database,
  }: {
    username?: string;
    password?: string;
    ip_address?: string;
    database: number | string;
  }): string {
    let url = 'mysql://';
    // username
    url += username 
    url += ':';
    // password
    url += password 
    url += '@';
    // hostname
    url += ip_address 
    url += ':';
    // port
    url +=  3306;
    url += '/';
    // database
    url += database;
    return url;
  }
  