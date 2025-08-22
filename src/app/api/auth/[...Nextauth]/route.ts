import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Normally you'd check user credentials against your DB here
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (credentials?.username === "jsmith" && credentials?.password === "1234") {
          return user; // ✅ Valid user
        } else {
          return null; // ❌ Invalid user
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // optional: custom login page
  },
  secret: process.env.NEXTAUTH_SECRET, // must be set!
});

export { handler as GET, handler as POST };
