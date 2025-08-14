from flask import Flask, render_template

app = Flask(__name__)

media = [
    {"type": "image", "file": "imagens/img_01_carrosel.jpg", "alt": "Obra 1"},
    {"type": "image", "file": "imagens/img_02_carrosel.jpg", "alt": "Obra 2"},
    {"type": "image", "file": "imagens/img_03_carrosel.jpg", "alt": "Obra 3"},
    {"type": "image", "file": "imagens/img_04_carrosel.jpg", "alt": "Obra 4"},
    {"type": "image", "file": "imagens/img_05_carrosel.jpg", "alt": "Obra 5"},
    {"type": "image", "file": "imagens/img_06_carrosel.jpg", "alt": "Obra 6"},
    {"type": "video", "file": "imagens/video_01_carrosel.mp4", "alt": "Vídeo 1"},
]

@app.route("/")
def home():
    return render_template("index.html", media=media)

if __name__ == "__main__":
    app.run(debug=True)
