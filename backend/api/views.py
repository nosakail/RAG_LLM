from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.decorators import api_view
import subprocess

@api_view(['POST'])
def query_llm(request):
    user_query = request.data.get("query", "")
    print(f"Received query: {user_query}")  # Log de la requête reçue
    command = ["ollama", "run", "mistral", user_query]
    result = subprocess.run(command, capture_output=True, text=True)
    
    if result.returncode == 0:
        response_text = result.stdout
        print(f"Response from command: {response_text}")  # Log de la réponse
        return JsonResponse({"response": response_text})
    else:
        error_message = result.stderr
        print(f"Error from command: {error_message}")  # Log de l'erreur
        return JsonResponse({"error": error_message}, status=500)
