- [x] Completed
- [-] In Progress
- [ ] Not Started

# My tasks

## Project Planning
### Define project scope
- [ ] Outline functionality
- [ ] Define key features
### Research Youtube API
- [ ] Familiarise with

## Set up Chrome Extension
- [ ] Create extension files (manifest.json, popup.html, popup.js)
### Manifest File
- [ ] Define basic extension properties.
- [ ] Specify necessary permissions.
### Popup HTML
- [ ] Design a simple user interface for the extension popup.
### Popup JavaScript
- [ ] Implement basic logic for triggering actions when the button is clicked.
### Background script (background.js)
- [ ] Set up the background script to handle communication between the popup and content scripts.

## Implement Chrome content script
### Content script (content.js)
- [ ] Interact with the YouTube webpage.
- [ ] Use the YouTube API to fetch video details and transcripts.
### Message passing
- [ ] Set up message passing between content script and background script.
- [ ] Send relevant data (transcript) from content script to background script.

## Set up flash backend
- [ ] Install flask (pip install flask)
### Create flask app
- [ ] Set up a basic Flask application.
- [ ] Enable CORS for handling cross-origin requests.
### Handle transcript analysis
- [ ] Implement a route in the Flask app to receive transcript data.
- [ ] Integrate your custom NLP model or logic for analyzing the transcript.

## Develop NLP Model
- [ ] Collect a labeled dataset of YouTube video transcripts with labeled key moments.
### Data preprocessing
- [ ] Tokenize, lowercase, and remove stop words.
- [ ] Convert text data into numerical features.
### Model design
- [ ] Choose a simple text classification model (e.g., Naive Bayes, logistic regression, or shallow neural network).
### Model training
- [ ] Train your model on the labeled dataset.
### Model evaluation
- [ ] Evaluate the model's performance using appropriate metrics.

## Integrate NLP Model with Flask Backend:
- [ ] Modify the Flask app to use trained NLP model for transcript analysis.
- [ ] Test the integration and refine the NLP model if needed.

## Finalise and Test
- [ ] Test the complete extension on various YouTube videos to ensure proper functionality.
- [ ] Refine the extension's user interface based on testing and user feedback.

## Deployment
- [ ] Package extension
- [ ] Provide documentation on how to use extension
