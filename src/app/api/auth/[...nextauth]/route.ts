
import { authOptions } from "@/utils/authoptions";
import NextAuth from "next-auth";
 // Import your NextAuth options from another file if necessary
import { NextAuthOptions } from "next-auth";

// Create a handler for the POST method (since NextAuth usually handles POST requests for authentication)
const handler = NextAuth(authOptions as NextAuthOptions);


// Export the handler for the `POST` method
export { handler as POST, handler as GET };
