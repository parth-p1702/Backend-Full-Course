// Host the node app:-
// 1.Initialize a Git repository (if you haven't already):
// git init
// git add .
// git commit -m "Initial commit"

// 2.Create a new repository on GitHub, GitLab, or any other Git hosting service.
// Follow the instructions provided by the service to create a new repository.
// 3.Link your local repository to the remote repository:
// git remote add origin <remote-repository-URL>
// git push -u origin master

// 4.Go to Railway and sign in.

// 5.Create a new project and choose "Deploy from GitHub repo".

// 6.Select your repository and follow the prompts.

// 7.Set environment variables (if needed) in the Railway dashboard.

// 8.Deploy—Railway will build and host your app automatically.

// 9.Access your app via the provided Railway domain.
// Make sure your Node.js app has a start script in package.json
// package.json
// {
//   "scripts": {
//     "start": "node host.js"
//   }
// }