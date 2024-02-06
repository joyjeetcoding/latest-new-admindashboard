export { default } from "next-auth/middleware";


// from login page if we want to go to dashboard, we cannot go.....dashboard is protected
export const config = { matcher: ["/dashboard"] };
