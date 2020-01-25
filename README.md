# Swagger Pages
> Use github pages to publish versioned API documentation using the OpenAPI Specification

Provides a github-pages compatible frontend to render beautiful API documentation from the Open API Specification. Versioning can be done using branches as normal.

## Getting Started

Follow the instructions to get set up hosting your own API documentation

1. Clone the project to your computer
```sh git clone https://github.com/tobytwigger/swagger-pages my-project-api-docs ```

2. Set up the environment file. This contains no sensitive information, and is just used to build up a URL for your public repository, so can be committed to your version control.

```sh cp .env.example .env && nano .env ```
- GITHUB_USERNAME = your github username
- GITHUB_REPOSITORY = the repository your documentation will be hosted on

3. Build the project
```sh npm install && npm run build```

4. Push to github
- Create a repository with a name matching the GITHUB_REPOSITORY .env variable
- Attach the repository to a remote reference
```sh git remote add origin git@github.com:username/repository ```
- Commit and push your changes to the master branch

5. Set up github-pages for the master branch /docs folder

6. Create additional branches containing a swagger.json file to publish them as API documentation

## Updating

We will update this repository with features and bug fixes. To update your documentation, you can leave all your version branches (containing swagger.json) untouched. On the master branch

1. Add the remote reference
```sh git remote add original git@github.com:tobytwigger/swagger-pages ```

2. Pull the master branch
```sh git pull original master```
```sh git checkout master ```

3. Build and push to master branch
```sh npm install && npm run build```

## Meta

Toby Twigger – tobytwigger1@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/tobytwigger/swagger-pages](https://github.com/tobytwigger/swagger-pages)
