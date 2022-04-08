const PrismaClient = require('./client').PrismaClient

const prisma = new PrismaClient({datasources: {db: {url:  'https://fakehost.com'}}})
console.log('created')
