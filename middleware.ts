import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/api/(.*)', // Adjusted to run on all API routes
    // Allow access to the webhook route
    '/api/webhooks(.*)', // This line allows public access to the webhook route
     '/', // This line allows home page access to the webhook route
     '/api/uploadthing',
     '/:username',
     "/search"
  ],
};
