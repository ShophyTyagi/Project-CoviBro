# Project CoviBro

[![Website](https://img.shields.io/badge/View-Website-blue)](https://www.dockthis.tech/)


## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Live demo](#live-demo)
1. [Built with](#built-with)


## Short description

### What's the problem?

It’s a frightening time. We’re in the midst of a worldwide pandemic, with cities and even entire countries shutting down. Some of us are in areas that have already been affected by coronavirus. Others are bracing for what may come. And all of us are watching the headlines and wondering, “What is going to happen next?” 
Well you might not always have someone to talk to during times like this, we wish to provide you with a companion who will never get tired of answering your queries!

### How can technology help?

Chatbots are perfect for when users are appearing on government website for location based information or generic COVID-19 related information. Specially since they cannot wait to talk to real person, this information is crucial to be received right away 24/7. 

### The idea

Sources have tons of answers to the frequently asked questions about the virus. Healthcare businesses can utilize the information from these trusted sources to create chatbots, voicebots and even messenger bots for their custom needs.

## Demo video

[![Watch the video](https://github.com/shophy26/Project-CoviBro/blob/master/Images/Project_CoviBro.png)](https://youtu.be/R4P_bb8CXyc)

## The architecture

![Video transcription/translation app](https://github.com/shophy26/Project-CoviBro/blob/master/Images/User_Interaction_Diagram.png)

1. The user navigates to the site https://www.dockthis.com and chats with the bot.
2. Watson Assistant at the backend links each of the queries to it's appropriate intent and gives the response from the dialogue flow.
3. Watson Assistant uses webhooks, sending POST request to the url. Webhook gives the status of a successful request from the action created in Watson Discovery. 
4. Watson Discovery uses [The Weather Company](https://api.covid19api.com/summary) and [CovidAPI](https://coronavirus-19-api.herokuapp.com/) services for providing Covid-19 statistics and the latest news.

## Long description

The coronavirus disease 2019 (COVID-19) pandemic may be stressful for people. Fear and anxiety about a new disease and what could happen can be overwhelming and cause strong emotions in adults and children. Public health actions, such as social distancing, can make people feel isolated and lonely and can increase stress and anxiety. However, these actions are necessary to reduce the spread of COVID-19. Coping with stress in a healthy way will make you, the people you care about, and your community stronger. Project COVIBRO aims towards addressing the most basic concern there is during such times of the pandemic, an overwhelming amount of resources available for someone who just wants to know a gist about it. 


The coronavirus disease 2019 (COVID-19) pandemic may be stressful for people. Fear and anxiety about a new disease and what could happen can be overwhelming and cause strong emotions in adults and children. Public health actions, such as social distancing, can make people feel isolated and lonely and can increase stress and anxiety. However, these actions are necessary to reduce the spread of COVID-19. Coping with stress in a healthy way will make you, the people you care about, and your community stronger. Project COVIBRO aims towards addressing the most basic concern there is during such times of the pandemic, an overwhelming amount of resources available for someone who just wants to know agist about it. 


Wouldn't it have been better if there existed a platform that separated the wheat from the chaff and got us information that would help us directly? COVIBRO, our chatbot powered by IBM Watson backed by Watson Discovery Service that’s got a human touch to it does just that, COVIBRO has been designed from scratch to address the concerns of a not so literate but a capable mobile user who can only understand so much. Its primary user would-be citizens who are moderately informed about the condition of the pandemic worldwide, this includes kids and higher age demographics, both of which in today’s generation are very capable of using a website both on a desktop or a mobile. COVIBRO has been submitted in a deployed state, ready to take on queries and answer then and learn about the ones that it does not know about yet. To keep the user experience as simple yet impactful as possible, this project has been deployed onto a WordPress backed selected primarily due to the wide range of add-on plugins, using the API Integration and the tutorials provided, COVIBRO has been successfully deployed onto the domain (www.dockthis.tech) managed by our team. 


Another important aspect of the chatbot has been the careful inclusion of also those who are experiencing loneliness and need someone to talk to, COVIBRO has been at a starter level successful in the figure of speech it uses as well as the Call To Actions. The chatbot provides phone numbers of local health institutions to help people obtain medical help faster.

## Project roadmap

![Roadmap](https://github.com/shophy26/Project-CoviBro/blob/master/Images/CoviBro_Roadmap.png)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```bash
dnf install wget
wget http://www.example.com/install.sh
bash install.sh
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be, for example

```bash
export TOKEN="fffd0923aa667c617a62f5A_fake_token754a2ad06cc9903543f1e85"
export EMAIL="jane@example.com"
dnf install npm
node samplefile.js
Server running at http://127.0.0.1:3000/
```


## Live demo

You can find a running system to test at [dockthis.tech](http://dockthis.tech/)

## Built with

* [IBM Watson Discovery](https://https://www.ibm.com/in-en/cloud/watson-discovery) - The Watson Discovery News Fetch and Serve Service
* [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
* [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used




