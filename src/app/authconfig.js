'use client'
export const authConfig = {
  providers:[],
  pages: {
    signIn: "/", //it means if we are not logged in, it will redirect to login page
  },
  callbacks: {
    authorized({ auth, request }) {
      const isloggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isloggedIn) {
          return true;
        }
        return false;
      }
      else if(isloggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl))
      }
      return true
    },
  },
};
