import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  constructor() {}
  async test() {

    const prismaGeral= new (await import('@thevoidtest/prisma-geral')).PrismaClient()
    console.log('created geral')

    const prismaTenant= new (await import('@thevoidtest/prisma-tenant')).PrismaClient()
    console.log('created tenant')

    // const prismaByFactory = await create({database: '', schema: 'geral', ip_address: 'ip_address'})
    // console.log('created by factory', await prismaByFactory?.$connect())

  }
}
