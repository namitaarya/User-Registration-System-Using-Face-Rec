from flask import Flask, request
from flask_cors import CORS
import json
from PIL import Image
import base64
import io
import os
import shutil
import time
from deepface import DeepFace


app = Flask(__name__)
CORS(app)

model_name = "VGG-Face"
model = DeepFace.build_model(model_name)


def create_image(directory, data, arg):
    result_f = data[arg]
    b1 = bytes(result_f, 'utf-8')
    image = b1[b1.find(b'/9'):]
    im = Image.open(io.BytesIO(base64.b64decode(image)))
    im.save(directory + '/' + arg + '.jpeg')

@app.route('/api', methods=['POST', 'GET'])
def api():
    data = request.get_json()
    resp = '0'
    directory = './people'
    if data:
        if os.path.exists(directory):
            shutil.rmtree(directory)

        if not os.path.exists(directory):
            try:
                os.mkdir(directory)
                time.sleep(1)
                create_image(directory, data, 'first')
                create_image(directory, data, 'second')
                result = DeepFace.verify(directory + '/first.jpeg', directory + '/second.jpeg')
                print(result)
                if result['verified'] == True:
                    resp = '1'
                else:
                    resp = '0'
            except:
                pass
    return resp

if __name__ == '__main__':
    app.run()