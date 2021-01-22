## GN THEME ACTIVITY PAGE - AKA TEMP PAGE

We utilise Gatsby Themes and all temp sites use the gatsby-theme-minimal plugin. This is a Monorepo and we operate many sites in one repo.

<ins>Pre Resquites</ins>

- Gatsby
- Gatsby Themes
- GraphQL
- Netlify Cli
- Understanding on Shadowing
- Light Understanding of Monorepos

<ins>Packages Needed</ins>

- npm
- node
- gatsby-cli
- netlify-cli

#### The File Structure

```
. (Root Level)
├── README.md (This File)
├── gatsby-theme-minimal (Gatsby Theme Package Level)
│   ├── README.md
│   ├── gatsby-config.js
│   ├─── src (Where The Shadowing Magic Happens - Read About Shadowing)
│   │     ├─ gatsby-plugin-theme-ui
│   │     └─ gatsby-theme-minimal
│   │         ├─ gatsby-plugin-theme-ui
│   │         ├─ components
│   │         └─ index.css
│   ├── index.js
│   └── package.json
├── siteFolderName (Site Level)
│   ├── gatsby-config.js
│   ├── package.json (local Site Package.json)
│   ├─── src (Where The Shadowing Magic Happens - Read About Shadowing)
│   │     ├─ gatsby-plugin-theme-ui
│   │     └─ gatsby-theme-minimal
│   └─── yarn.lock (Important For Netlify To Recongise Monorepo and use yarn instead of NPM to build)
├── package.json (Global Package.json)
└── yarn.lock
```

## CREATING A SITE

<ins>STEP 1:</ins> Create folder name for the site at root level (i.e siteFolderName)
<ins>STEP 2:</ins> Inside that Site Folder We need (Copy From Another Site). [gatsby-config.js, src(folder), package.json, yarn.lock]
<ins>STEP 3:</ins> Inside the package.json (Global/Root Level) Add the siteFolderName To workspaces Array
<ins>STEP 4:</ins> Inside the Local package.json (site Level) make sure the name of the package.json eqaul the siteFolderName
<ins>STEP 5:</ins> Inside gatsby-config.js (site Level) add the gonationID and the PoweredID they are found in mission control <a href="https://mission.control.gonation.com/#/login">Here<a>. The gonationID is found under ID and the powered ID is found under Powered when activated. The other Settings in there there is you want to hide any particular section. If there is no data in gonation is will hide automatically. but if you want it specifically hidden you can do it by change the true to false for one of the options. You May Also Add Online Ordering Link.
<ins>STEP 6:</ins> Run the develop command - yarn workspace siteFolderName develop

## Custom Styling and Changing Colors - Shadowing

<ins>STEP 1:</ins> Inside src at site level. make sure there is a folder called gatsby-plugin-theme-ui and inside that folder. create a index.js file. This should be copied from the plugin found in "gatsby-theme-minimal > src > gatsby-plugin-theme-ui > index.js"

<ins>STEP 2:</ins> When Creating New Shadowing files the server will need to be restarted.

<ins>STEP 3:</ins> Change the colors/fonts that you want to in index.js file at the site level

## Deploying To Netlify

<ins>STEP 1:</ins> Go to netlify.com and create a site using the ui and coming from the repo gn-theme-activity.

- add The Build Command = yarn workspace siteFolderName build
- Publish Command = public

<ins>STEP 2:</ins> Cancel the Build that runs on create

<ins>STEP 3:</ins> Go To Settings

Follow the Directory to | Site Settings > General > Site Information Change Site Name
change to siteFolderName. (if not avaliable make something up thats close)

Follow the Directory to | Site Settings > Build & Deploy > Build Settings > Edit Settings
Change The Base Directory
Base Directory = siteFolderName

<ins>STEP 4:</ins> Create Build Hook

Follow the Directory to | Site Settings > Build & Deploy > Build hooks > Add Build Hook
name the build hook "gonation"

Copy the Id Part of the Build hook it looks like this '600b0d5963a32814183a8efe'

<ins>STEP 5:</ins> Add Build Hook To GN Mission Control. <a href="https://mission.control.gonation.com/#/login">Here<a>.

Search Site and click netlify id and add the id part of the netlify build hook

<ins>STEP 6:</ins> Go To Forms To Add Contact Form Email

Follow the Directory to | Site Settings > Forms > Form notifications > Add Notification Email Notification

The Follow Instructions and add contact form email

<ins>STEP 7:</ins> Login Into Netlify CLI using netlify account

type in the command line

- netlify login

username

- dev@gonation.com

<ins>STEP 8:</ins> Link The Local Repo To the Site

type in the command line

- netlify link

search for site by sitename that you created and changed earlier

site now linked

<ins>STEP 9:</ins> Build Locally

type in the command line

- netlify build

<ins>STEP 10:</ins> Deploy To Netlify

type in the command line

- netlify deploy (for preview)
- netlify deploy --prod (for production)

<ins>STEP 11:</ins> Check Site and Your Done
