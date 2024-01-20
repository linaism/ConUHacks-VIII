from flask import Flask, jsonify, make_response
from flask_cors import CORS


app = Flask(__name__)

def create_app(test_config=None):
    
    app = Flask(__name__)
    
    # setup
    CORS(app, resources={r'/*': {'origins': '*'}})

    
    # hello world test
    @app.route('/hello')
    def hello():
        return make_response('hello world', 200)

    
    
    
    return app


app = create_app()

if __name__ == "__main__":
    print(" Starting app...")
    app.run(host="0.0.0.0", port=4200)
