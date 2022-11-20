# Aesculapius Healthcare (Front-End)

Created by [Graham Zemel](https://grahamzemel.com), [Darren Weng](https://darrenweng.com), [Gabriel Weng](https://gabeweng.com), and [Surya Rao](https://github.com/BestLocation)

### Live Site:
[aesculapius.tech](https://aesculapius.tech)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/e7eb51f4-c261-4ef7-bf33-0fb62171c8e4/deploy-status)](https://app.netlify.com/sites/aesculapius/deploys)

### Back-End: 
[aesculapius-backend](https://github.com/gabeweng/aesculapius-backend) 

## Write-Up:
![unnamed](https://user-images.githubusercontent.com/69569628/202891923-5bce84d3-806c-4af4-888a-2c64eef088b2.png)

## Inspiration
We were inspired by the multiple health care websites across the internet, which are filled with crucial healthcare information, but we wanted to make this information more accessible, especially to people who do not understand technology but could greatly benefit from the information contained in the Internet. To help people like this, we created a chatbot, as human interaction is something almost everyone can understand, which makes the chatbot more accessible than self research. This goal of helping people access the healthcare information they need led to us naming the project Aesculapius, the Roman god of medicine whose snake entwined staff still represents medicine today. 
 
## What it does
The chatbot uses co:here Intent Recognition to intelligently interpret user input. We then use multiple external APIs to retrieve the healthcare information as requested by the user. This information is then displayed to the user in multiple ways. From a simple response from the chat bot, to the information being mapped or graphed depending on the needs of the user. The chat bot is meant to be general and all encompassing, serving as a medium to get the user important healthcare information and direct them to professional help or emergency services if required. 
 
## How we built it
We split up this project into a front end (made with Svelte, Tailwind, and TypeScript) and a backend (made with Python). The front-end contains the website and the chatbot. Based on the inputs of the user, the chatbot requests information from the Python web service API in the backend, which gets information from external APIs such as Twilio and Cohere. We used both for sending out things like emergency messages, as well as using text messages to talk to a chatbot.
 
## Challenges we ran into
- Making the Svelte front-end
- Setting up front-end routing with TypeScript and Rollup
- Using Vercel to host the backend
- Using Twilio to SMS message phones
 
## Accomplishments that we're proud of
- Making a web service Python API and hosting it on Vercel
- Using co:here to recognize user’s intent with a custom engineered chatbot, and utilize it's text generation capabilities
- Using Twilio to send and receive text messages in the backend
- Creating components with Svelte as well as creating optimized and fast sites using TypeScript
- DNS configuration with a Domain.com domain
 
## What we learned
- How to recognize intent using cohere
- How to use Twilio to send important messages
- How to split up the front-end and back-end
- How to use certain front-end languages more efficiently
- How to better manage domains and hosting
 
## What's next for Aesculapius 
- Interactive map with hospital locations from backend
- Higher quantity of medical information
- More tailored responses for types of solutions to issues
- Focus on mental health even more and it's scientific aspects
 
Built With: Cohere, Svelte, TypeScript, Tailwind, Twillo, Python, Netlify, Vercel

