from flask import Flask

app = Flask(__name__)

def create_app(test_config=None):
    
    app = Flask(__name__)
    
    
    
    return app

if __name__ == '__main__':
    app.run()
