# WEB102 Prework - Sea Monster Crowdfunding tracker

Submitted by: Samir Hassan

Sea Monster Crowdfunding tracker is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] The Our Games section includes a button, Sort by most Backers, that sorts the games from the most amount of individual backers to least amount of individual backers.
* [x] The Our Games section includes a button, Sort by least Backers, that sorts the games from the least amount of individual backers to most amount of individual backers.

## Video Walkthrough

Here's a walkthrough of implemented features:

[Video Walkthrough](https://imgur.com/a/cWHh0LX)

<!-- Replace this with whatever GIF tool you used! -->
MP4 created with MacOS Screen Recording Tool  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

Certain challenges I encountered while building the app are as follows

* Getting the ternary operator to work within the Reduce function
* Stuck on creating a div element and adding it to the right place in the DOM
* When displaying the image of a game, I was having trouble getting it to fit within the div until I changed the CSS styling
* Had trouble destructuring the name component of the Top Funded Game and the Runner Up
* Couldn't figure out how to customize the page at first but landed on my two new buttons added to Our Games section
* Was having trouble with the addGamestoPage function such as how to iterate over the games properly and then the innerHTML as well. The innerHTML included template literals and adding div elements inside which had me stuck for a while

## License

    Copyright 2024 Samir Hassan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
