from flask import Flask, request, jsonify
from flask_cors import CORS
from model import get_recommendations

app = Flask(__name__)
CORS(app)

@app.route("/api/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    title = data.get("title", "")
    if not title:
        return jsonify({"error": "Title is required"}), 400

    result = get_recommendations(title)
    if isinstance(result, dict) and "error" in result:
        return jsonify(result), 404
    
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
