# PlanViewer
This small tool visualize a pddl plan written on a text file called plan.txt

Here's how to use it in Linux or Mac:

Download this project as a zip or tgz file from his repository

Extract the folder inside it

Move the folder in var/tmp if you're on Linux or in Mac
If you're a Windows user, I'm sorry this won't work...but don't worry a Windows version is coming

Now open the folder planner and launch the terminal inside this folder

Type this command to open VSCode:

code .

Now open the terminal in VSCode in Terminal -> New Terminal and type this command:

npm install

This will install all the modules necessary to the project(express in particular).

Now type in Terminal:

cd src/

And then:

node index

"The file plan.txt doesn't exist, make sure you've launched a planner at least one time
An empty file will be created
File written successfully
Server listening on port 8000!"

This should be your output if you don't have launched any planner before

Otherwise here's the output:

"File written successfully
Server listening on port 8000!"

You can see a json file going on "localhost:8000/data"

Now you can open in the folder the file index.html and see the resulting output as a series of red, green and blue boxes if you've launched a planner or as a black screen if don't have launched any before

