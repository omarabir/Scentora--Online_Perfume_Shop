import { authOptions } from "@/lib/authOptions"
import NextAuth from "next-auth"




const handeler = NextAuth(authOptions)
export { handeler as GET, handeler as POST }