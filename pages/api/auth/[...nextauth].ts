import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          type: "email",
          label: "Email Address",
          placeholder: "john.doe@email.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Please enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        return {};
      },
    }),
  ],
});
