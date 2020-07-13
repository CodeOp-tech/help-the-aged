# Help The Aged

## Introduction

Create an app for elderly / care homes to find local volunteer help

Ideally, we would like an interactive map where you can browse people needing help / people offering help locally.

We will focus on creating the user experience for people offering their help.

## Steps & Functionalities

- Database
Create a database with entries from Helper's profile (needs to include Postcode + task interested in)

- Homepage
Present what the project is and how it works
Includes a carousel with pictures of different services Helpers can offer
Includes a form to join and post an ad as a local helper that will render on the map

- Map
Create a map to render a marker on every postcode for which a Helper has posted their profile.
When clicking on the marker, it should render the usernam + what they would like to help with + their contact details.
The map needs to use geoip in order to render in the area of the user when they arrive on site.

<!-- Should we focus solely on London for now ? -->

- Map Filter
Create a filter so that people in need of help can see markers in their area only for tasks they are interested in

## Technologies

React.js
Node.js
Express
mySQL
Datagrid

## Set up