# Project Title
GPT YouTube Analyzer

## Introduction
GPT YouTube Analyzer is a web-based application designed to extract, transcribe, and analyze content from YouTube videos using GPT-powered models. It provides a user-friendly interface for entering YouTube video URLs, submitting related questions or prompts, and receiving insightful, AI-generated content or answers based on the video's audio.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)

## Installation
To set up the GPT YouTube Analyzer on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Ensure you have Python 3.7+ installed.
3. Install the required Python dependencies by running `pip install -r requirements.txt` (Note: The requirements file needs to be created based on the dependencies outlined in the Python scripts).
4. Set up Flask environment variables: `export FLASK_APP=app2.py` and `export FLASK_ENV=development`.
5. Start the Flask application with `flask run`.

## Usage
To use the GPT YouTube Analyzer, follow these steps:

1. Open the application in your web browser.
2. Enter the URL of the YouTube video you wish to analyze.
3. (Optional) Enter specific questions or prompts related to the video content.
4. Click the "Analyze" button to process the video.
5. View the generated insights or answers based on the video's content.

## Features
- YouTube video content extraction and transcription.
- Interaction with GPT models to generate content based on video transcriptions.
- A user-friendly web interface for easy interaction.

## Dependencies
- Flask
- pytube
- moviepy
- Google Cloud Speech-to-Text API
- Google Cloud Storage
- OpenAI GPT (API key required)

## Configuration
Ensure you have valid API keys and access credentials for:
- Google Cloud Services (for Speech-to-Text and Storage)
- OpenAI GPT

These credentials should be securely stored and not hard-coded into the application.

## Documentation
Further documentation detailing the API interactions, data flow, and architecture is pending.

## Examples
An example interaction could involve inputting a YouTube video link about "Artificial Intelligence," submitting questions like "What is the future of AI?" and receiving detailed, GPT-generated responses.

## Troubleshooting
- Ensure all dependencies are correctly installed.
- Check API keys and access credentials for validity and proper configuration.
- For issues with Flask or the web interface, verify the Flask application is running and accessible.

## Contributors
https://github.com/AntoineBarthelemy
https://github.com/hassanserhann
