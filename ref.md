Hey everyone!

Trying to build an app and have nextJS on the frontend hosted on Vercel, which communicates with a separate backend API hosted on Heroku. I'm new to some of this stuff (especially Next) so having trouble figuring out exactly what is the best way to do it.

I want backend to provide basic CRUD operations to a MongoDB database on Atlas, which frontend can leverage by making API calls to it. I have authentication setup using NextAuth.js using a Google provider (got Oauth credentials, etc., and hooked it up per the docs). So I have Google authentication working for sign in to my app.

Now I'm kind of stuck and lost on where to go from here. Some things I'm having trouble with moving forward:

    I know I want to get a more robust user schema set up (maybe Mongoose?) so my database can begin holding user information as I want it in my app, but how do I do that within the confines of my NextAuth setup, which automatically writes a new user to my MongoDB db when someone goes through the auth process, or logs them in if they already exist?

    If Next / NextAuth are handling authorization on the frontend, how do I use that information to get user data within my app? Can I use an accessToken from the Google auth process to query my database from certain components to get user data as I've defined it in my app? Or do I use the mongodb _id that each entry gets assigned? OR, do I have to do all of that within Next since I'm already kind of doing that?

    It looks from the docs like I will want to use getInitialProps() in any components that are going to send requests to my separate backend on Heroku so users can perform CRUD stuff, sounds simple enough but I'm kind of getting flustered from the blurry lines between front/backend working with NextJS. Any gotchas?


Okay so long ass post, sorry. If anyone has recommendations on the above ^ or generally on how to set up a project like this properly I'd LOVE your advice, as there is a lot of docs out there on nextJS but not a ton on doing fullstack stuff and everyone says they do decoupled front/backend but no one says exactly how. Thanks in advance for any help and cheers guys!