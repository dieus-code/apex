initialize the project, create the repository and then send every member an invite to join the repo

create a new foler and install vite
npm reate vite@latest apex -- -- template react
select ESLint as a linter then install with npm and start now
wait for dependencies to finish installing

back to GitHub for project verification
create a new repository on the command line:
echo " apex" > README.d
git init git add README.md
git commit -m "first commit" git branch -M main
oft remote add origin https://g1thub.com/d1eus-code/apex.git
git push -u origin main

node version = 24.16.0
npm version = 11.13.0

confirm that your node modules are ignored

cd into our project directory and install react router dom 
use npm audit fix to fix potential vulnerabilities that hackers might exploit
if it is still there then you can run npm audit fix --force
push everything to GitHub now:
git add. 
git commit -m "Initial project setup"
git push


RULES:
no one is allowed to push or touch anything on main 
for collaboration, every developer will clone from the development branch, once you clone...check out to your own branch. your own branch should have your name or the feature you are working on. once you do that, run npm install and install features and you can start working
everyday you must push what you have done for the day before close of business and if you push it to main you are dead and if you push it to develop you will go to the hospital to know what is wrong with you.
any developer that violates a rule 3 times will contribute to buying of suya for the team at the end of the month.
you are only allowed to push to your branch
if you are done with the feature you are working on you can open a pull request to the development branch and let the team lead know that your request is ready for merge. pull request would be merged on first come first serve basis. 
every morning when you wake up, the first command you run would be git pull origin develop


for authentication pages:
chimdi will do the nav bar and footer
charis is doing the card component, making responsive and background image
joseph is working on input and button component
pascal is working on layout, routing, font and color

React-icon is the package for icons to be used