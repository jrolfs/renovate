<div align="center">
<br>
<br>
<h1>Renovate Presets</h1>
<p>Configuration presets for the <a href="https://docs.renovatebot.com"><strong>Renovate</strong></a> dependency manager</p></div>

<div align="center">

[![Node Version][node-badge]][node-link]
[![Code Style][prettier-badge]][prettier-link]
[![Conventional Commits][conventional-commits-badge]][conventional-commits-link]

</div>

<br>

## ⚙ Installation

1. Add the GitHub-hosted Renovation application to your repository. See the
   [documentation](https://docs.renovatebot.com/getting-started/installing-onboarding/#hosted-githubcom-app)
   for how to do so.

2. In the
   [onboarding](https://docs.renovatebot.com/getting-started/installing-onboarding/#repository-onboarding)
   pull request, edit the configuration (`renovate.json` or `renovate.json5`) to
   extend the relevant preset from below.

## 🧰 Available Presets

The following Renovate presets are available for use with the `extends` array in
a `renovate.json` or `renovate.json5`.

### NPM

#### Base

> ⚠️ This preset automatically merges pull requests, see
> [Automatic Merging](#automatic-merging)

```json5
{
  extends: ['github>jrolfs/renovate:npm.json5#v0.1.0'],
}
```

#### Feat

Use `feat(deps):` as a commit prefix for non-development dependencies.

```json5
{
  extends: [
    'github>jrolfs/renovate:npm.json5#v0.1.0',
    'github>jrolfs/renovate:npm-feat.json5#v0.1.0',
  ],
}
```

## Automatic Merging

If a preset includes automatic merge settings, follow these instructions to make
sure it works as intended:

1. Configure a protected branch

   1. ☑️ Require status checks to pass before merging ← **required**, this is
      important!
   2. ☑️ Require a pull request before merging ← _optional_, see step 2 below
   3. ☑ Restrict who can push to matching branches ← _optional_, if you set this
      _make sure to add the **renovate** user to the list_

2. Configure automatic pull request approval (only necessary if you are
   requiring reviews)

   **`.github/workflows/approve.yml`**

   ```yml
   name: Approve

   on: pull_request_target

   jobs:
     auto-approve:
       runs-on: ubuntu-latest
       steps:
         - uses: hmarr/auto-approve-action@v2
           if: github.actor == 'renovate[bot]'
           with:
             github-token: '${{ secrets.GITHUB_TOKEN }}'
   ```

[node-link]: https://nodejs.org
[npm-link]: https://www.npmjs.com/
[conventional-commits-badge]:
  https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-link]: https://conventionalcommits.org
[maintenance-badge]:
  https://img.shields.io/badge/maintenance-active-247ddc?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAB1ElEQVRIibWWPUtdQRCGH0VNF/wCCVjYCxr/gZWdhYVgLQYbm/wACTYxxA8SSBDtbKwUbfQWkiJFAgkkmHBBY6U2CXaCGlDDG1buxePOnt17bsgD28zOzjtnZvbuRVKR1SFpVdKepEe1njOGnOWCz0q60B1lSa05/oVE2iTNSfqdCZ7lSyWB0NmkSJekeUmXJqzlayWZUJxckUUTJs23mFAjlhNjSdMHfAQ6g54hZUnDdXyN44ek7iKNH4w0PMaeX7pQ8Ox6HQkWww3Dw1hPWoAJ4BxoB4aNR5oB4APQ5vekUdITSceZDLcreyORrGPcfpEL0CBpVNJRwLmUSWLS7NbGpju8FXEteT2qR+jQ9aS3QK2XgUljjXPpRC6iLpYV4KmxRghNVy28Aqb+t4jjLbBhrAH+RcRxZSwBUiINxlIHKZE/xlIHTTlHBDwHjoDPwHtgF/gEnBnvFJVfzSrXkpYyfxKGvIu14F3ONXP1LOWmzEPjpuWl92j55XyQyDnEjRN5AbwD9gMOPkV7tAPMOJE3ZuuOFmOpjS3gGfCdQDl8fgGnGVtzwt8F7wdGqgKOvOmq4iarB3gMjAFlb78qug5MAwehIO4tKViJe4wDP4FSrgfwF/ntR8JxRSf3AAAAAElFTkSuQmCC
[node-link]: https://nodejs.org/en/download/
[node-badge]: https://img.shields.io/badge/node-v16.5.0-green
[prettier-badge]:
  https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier
[prettier-link]: https://prettierjs.org/en/download/
