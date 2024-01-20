from flask import Flask, jsonify, make_response
from flask_cors import CORS
import psycopg2
from dotenv import load_dotenv
import os
from supabase import create_client, Client



def create_app(test_config=None):
    app = Flask(__name__)

    load_dotenv()

    # PostgreSQL connection parameters
    url: str = os.environ.get("SUPABASE_URL")
    key: str = os.environ.get("SUPABASE_KEY")
    supabase = create_client(url, key)
        
    # setup
    CORS(app, resources={r'/*': {'origins': '*'}})

    
    # hello world test
    @app.route('/hello')
    def hello():
        return make_response('hello world', 200)
    
    # Test query
    @app.route('/test_query')
    def test_query():
        # Replace 'restaurant' with the actual table name
        table_name = 'restaurant'
        
        # Use 'from' method to interact with the table
        data, count = supabase.table(table_name).select('*').execute()
        
        return make_response(jsonify(data), 200)

    
    
    
    return app


app = create_app()

if __name__ == "__main__":
    print(" Starting app...")
    app.run(host="0.0.0.0", port=4200)
