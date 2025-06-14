import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load dataset
df = pd.read_csv('movies.csv')

# Pastikan ada kolom 'index'. Jika belum, buat.
if 'index' not in df.columns:
    df.reset_index(inplace=True)

# Selected features
selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']

# Fill missing values
for feature in selected_features:
    df[feature] = df[feature].fillna('')

# Combine all features into a single string
combined_features = df['genres'] + ' ' + df['keywords'] + ' ' + df['tagline'] + ' ' + df['cast'] + ' ' + df['director']

# Vectorization and similarity calculation (once at startup)
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combined_features)
similarity = cosine_similarity(feature_vectors)

# Create list of all movie titles
list_of_all_titles = df['title'].tolist()


def get_recommendations(movie_title, top_n=12, fields=None):
    import difflib

    find_close_match = difflib.get_close_matches(movie_title, list_of_all_titles)

    if not find_close_match:
        return {"error": "No similar title found"}

    close_match = find_close_match[0]
    index_of_the_movie = df[df.title == close_match]['index'].values[0]

    similarity_score = list(enumerate(similarity[index_of_the_movie]))
    sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

    recommendations = []
    for movie in sorted_similar_movies[1:top_n+1]:
        index = movie[0]
        movie_data = df[df.index == index].iloc[0]  # Ambil baris movie
        score = movie[1]

        # Jika fields None, default hanya title + score
        if fields is None:
            rec = {
                "title": movie_data['title'],
                "genres": movie_data['genres'],
                "vote_average": movie_data['vote_average'], 
                "popularity": movie_data['popularity'],
                "original_title": movie_data['original_title'],
                "score": float(score)
            }
        else:
            rec = {"score": float(score)}
            for field in fields:
                # Pastikan kolom ada di df
                if field in df.columns:
                    rec[field] = movie_data[field]
                else:
                    rec[field] = None  # Jika kolom tidak ditemukan
                
        recommendations.append(rec)

    return recommendations

