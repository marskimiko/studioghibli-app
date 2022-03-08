# Studio Ghibli-App

## Repository URL

https://github.com/marskimiko/studioghibli-app

## Project Philosophy:

This project was made with the intention of providing a space where you can easily access all of the different Sutdio Ghibli Films and information about them to help you decide which film to watch.

Hayao Miyazakim is about to release his last film and its imporant to have a place where people can go to quickly access the new iformation to preserve the importance of these films, espcially for newer generations who did not group up with them. 

## Features: 
- Displays a list of all Studio Ghibli films
- Provides description, release date, run time, and rotten tomato score for each film
- Can add films that may not be listed

## Description of app: 

This application is a database of Studio Ghibli Films. It uses a public API of a list of Studio Ghibli films to fetch the data : https://ghibliapi.herokuapp.com/films

The event listeners used in this application are DOMContentLoaded two click events, as well as a submit event. 

Upon clicking on the film the page then loads the name of the film, its description, date of release and rotten tomato score. In order to return to the full list of films you can click on the "All Films" button at the top of the page. You can also add a film to the list if there is anything listening by clicking the "Add Missing Film!" button which triggers a form to appear on the page where you can enter the missing information.

## How to Use:

**Step 1:** Click on a film from the list to read the description, release date, running time, and Rotten Tomato Score

![Alt Text](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f85dc381-0cdc-46fc-bc0d-33e3d92fdd30.gif?ClientID=vimeo-core-prod&Date=1646690609&Signature=0a71b65287578fc248151649d3acf9019c6b52b0)

**Step 2:** Click on the "All Films" button to return to the full list of films

![Alt Text](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/313ae811-a7a1-45a9-838d-25734842cb70.gif?ClientID=vimeo-core-prod&Date=1646690609&Signature=4e6aa21081a3ab2130d5b937a4a256b7db7c26c4)

**Step 3:** If you think that there is a missing film from the list click on the "Add a missing film!" button and a form where you can submit the film will appear

![Alt Text](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/2df9df67-017b-4649-82b8-d1a81bf42805.gif?ClientID=vimeo-core-prod&Date=1646690609&Signature=544d5b7f632e61504b3de1dac560ee075df2950e)

**Step 4:** Once you have entered a film name click the "Add Film" button and a fill will be added to the list

![Alt Text](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/1bd2fd79-be9a-4cf2-af3b-e51611e96bc4.gif?ClientID=vimeo-core-prod&Date=1646690609&Signature=de376078c110873b7a45ab70313a563284fbb0ab)

Technologies used:
- Vanilla JavaScript
- HTML
- CSS
- Ghibli api


