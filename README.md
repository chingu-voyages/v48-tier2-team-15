# DinoPedia

An app all about dinosaurs

### Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Workflow](#workflow)
- [Requirements & Specifications](#requirements--specifications)
  - [Functionality](#functionality)
  - [Extras](#extras)
- [Tech Stack](#tech-stack)
- [Our Team](#our-team)
- [Acknowledgements](#acknowledgements)
- [About Chingu](#about-chingu)

## Overview

Hey there! How about we create an app all about dinosaurs? We've got our data all set from the National History Museum that tells us about different dinosaurs.

Imagine our app like a dino world! We can show all kinds of dinosaurs – big ones looking for food, calm ones eating plants, and even tiny ones running around. From huge dinosaurs that made the ground shake to little ones in the forests.

And get this, our tool might even let us time-travel! Imagine going back in time to see how these dinosaurs lived. Plus, it tells us what type of dinosaur it is and where it used to call home. So, you'll get to know dinosaurs from all over the place.

We're thinking of adding a cool twist – using News data to show you the latest discoveries about dinosaurs. Pretty cool, huh?

## Installation

1. Clone the repository locally
   `git clone https://github.com/chingu-voyages/v48-tier2-team-15.git`
   <br>
2. Install project dependencies
   `npm install`
   <br>
3. Run the project locally
   `npm run dev`

## Workflow

## Requirements & Specifications

### Functionality

#### General Functionality

- A single-page application (SPA) or it's equivalent design to provide users with an immersive experience in exploring dinosaurs through a user-friendly interface.

#### Dinosaur Display

- Display dinosaurs' name, weight, length, country, diet and corresponding images sourced from the provided API data.

- Each dinosaur entry should be clickable to view full details.

#### Search Component

- Implement a search feature allowing users to search for dinosaurs by name, weight, length, country and diet.

- Search results should dynamically filter and sort dinosaurs based on the entered data (name, weight, length, country, diet).

- Search functionality should be case-insensitive and allow partial matching of dinosaur names.

#### Diet Chart Visualization

- The app must display two charts (pie chart and doughnut chart) illustrating the distribution of general dinosaur diets (e.g., herbivore, carnivore, omnivore) and type based on provided data.

- The charts must accurately represent the proportion of each diet type within the dataset.

- Users should be able to easily interpret and interact with the chart to understand diet composition.

- Ensure the chart is visually appealing and informative, providing a clear overview of diet composition.

#### Dinosaur Location Map

- Display the location of a selected dinosaur on a map.

- Upon clicking a dinosaur entry, dynamically fetch and display its geographic location on an interactive map using a mapping API (e.g., Google Maps).

#### Dinosaur Details View

- Enable users to view full details of a selected dinosaur upon clicking its entry.

- The details view should be accessible and provide comprehensive information about the selected dinosaur.

- Details should include additional information sourced from the API data such as:

  - name
  - imageSrc
  - typeOfDinosaur
  - length
  - diet
  - whenLived
  - typeSpecies
  - description
  - foundIn
  - taxonomy
  - namedBy

### Extras

#### Display Dinosaur News

- Consume the [NewsAPI](https://newsapi.org/) to display recent dinosaur discovery news related to a particular dinosaur.

## Tech Stack

- Vite
- React
- React-Router
- TailwindCSS

## Our Team

- Geoff Jamieson: [GitHub](https://github.com/UnionPAC) / [LinkedIn](https://www.linkedin.com/in/geoffjamieson/)
- Vanshika Patel: [GitHub](https://github.com/vanshika-99) / [LinkedIn](https://linkedin.com/in/vanshikapatel)
- Ja'Mesa Dixon: [Github](https://github.com/MeMeD10) / [LinkedIn](https://www.linkedin.com/in/jamesa-dixon/)
- Oleg Klyufinskyy: [GitHub](https://github.com/olegklyufinskyy) / [LinkedIn](https://www.linkedin.com/in/oleg-klyufinskyy/)

## Acknowledgements

We acknowledge the [National History Museum](https://www.nhm.ac.uk/) for providing access to the dataset containing valuable information about dinosaurs. Additionally, we thank [NewsAPI](https://newsapi.org/) for delivering the latest news on dinosaur discoveries, contributing to our ongoing exploration of this fascinating field.

## About Chingu

If you aren’t yet a member of [Chingu](https://www.chingu.io/) we invite you to join us. We help our members transform what they’ve learned in courses & tutorials into the practical experience employers need and want.
