# My Tasks

## Project Planning

### Define Project Scope

- [x] Outline functionality
- [x] Define key features

### Research YouTube API

- [ ] Familiarize with YouTube Data API to understand how to retrieve video details and transcripts.

## Set Up Chrome Extension

### Create Extension Files

- [x] Manifest.json
- [x] Popup.html
- [x] Popup.js

### Manifest File

- [x] Define basic extension properties.
- [x] Specify necessary permissions.

### Popup HTML and JavaScript

- [x] Design a simple user interface for the extension popup.
- [ ] Implement basic logic for triggering actions when the button is clicked.
- [ ] Design and implement UI for users to create custom prompts.
- [ ] Implement JavaScript logic to handle user prompts in the popup.
- [ ] Send user prompts to the backend for processing.
- [ ] Integrate NLP model to analyze user prompts.
- [ ] Generate responses based on the analysis of user prompts.
- [ ] Display responses to users in the extension popup.

### Background Script (background.js)

- [ ] Implement logic for handling communication between the popup and content scripts.
- [ ] Handle messages from the popup script to trigger actions in the content script.

## Implement Chrome Content Script

### Content Script (content.js)

- [ ] Interact with the YouTube webpage.
- [ ] Use the YouTube API to fetch video details and transcripts.

### Message Passing

- [ ] Set up message passing between content script and background script.
- [ ] Send relevant data (transcript) from content script to background script.

## Set Up Flask Backend

- [x] Install Flask (pip install flask).

### Create Flask App

- [ ] Set up a basic Flask application.
- [ ] Enable CORS for handling cross-origin requests.

### Handle Transcript Analysis

- [ ] Implement a route in the Flask app to receive transcript data.
- [ ] Integrate your custom NLP model or logic for analyzing the transcript.

## Develop NLP Model

### Data Collection

- [ ] Collect a labeled dataset of YouTube video transcripts with labeled key moments.

### Data Preprocessing

- [ ] Implement tokenization, lowercasing, and stop words removal.
- [ ] Convert text data into numerical features.

### Model Design

- [ ] Choose and design a simple text classification model (e.g., Naive Bayes, logistic regression, or shallow neural network).

### Model Training

- [ ] Train your model on the labeled dataset.

### Model Evaluation

- [ ] Evaluate the model's performance using appropriate metrics.

## Integrate NLP Model with Flask Backend

- [ ] Modify the Flask app to use the trained NLP model for transcript analysis.
- [ ] Test the integration and refine the NLP model if needed.

## Finalize and Test

- [ ] Test the complete extension on various YouTube videos to ensure proper functionality.
- [ ] Refine the extension's user interface based on testing and user feedback.

## Deployment

- [ ] Package the extension.
- [ ] Provide documentation on how to use the extension.
