// import NextAuth from "next-auth"

// const handler = NextAuth({

// })

// export { handler as GET, handler as POST }


import { config } from '@/libs/auth';
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = config;

const handler=NextAuth(authOptions);

export {handler as GET , handler as POST}