import {PrismaClient} from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined;
}


export const db = globalThis.prisma || new PrismaClient();

// Prisma Client will automatically be imported and used in your application's queries, mutations, and subscriptions.


if(process.env.NODE_ENV === 'development') globalThis.prisma = db;