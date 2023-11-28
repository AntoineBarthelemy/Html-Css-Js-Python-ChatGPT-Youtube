from flask import Flask, render_template, request, jsonify
from gpt_youtube import process_video, interact_with_gpt
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Ajouter cette ligne pour stocker les transcriptions en cache
cached_transcripts = {}


@app.route('/')
def index():
    return render_template('index2.html')


@app.route('/process_video', methods=['POST'])
def process():
    data = request.get_json()

    youtube_url = data.get('youtube_url')
    custom_prompts = data.get('custom_prompts')

    gpt_responses, transcript = process_video(youtube_url, custom_prompts)

    # Ajouter cette ligne pour stocker la transcription dans cached_transcripts
    cached_transcripts[youtube_url] = transcript

    return jsonify(gpt_responses)

# Ajouter cette nouvelle route pour accepter de nouvelles questions


@app.route('/ask_question', methods=['POST'])
def ask_question():
    data = request.get_json()
    youtube_url = data.get('youtube_url')
    question = data.get('question')

    transcript = cached_transcripts.get(youtube_url)
    if not transcript:
        return jsonify({"error": "Transcription not found"}), 404

    gpt_response = interact_with_gpt(question, transcript)
    # Changez "response" en "answer" ici
    return jsonify({"answer": gpt_response})


if __name__ == '__main__':
    app.run(debug=True)
#test
