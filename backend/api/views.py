from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.decorators import api_view
import subprocess

@api_view(['POST'])
def query_llm(request):
    user_query = request.data.get("query", "")
    command = ["ollama", "run", "mistral", user_query]
    result = subprocess.run(command, capture_output=True, text=True)
    
    if result.returncode == 0:
        response_text = result.stdout
        return JsonResponse({"response": response_text})
    else:
        error_message = result.stderr
        return JsonResponse({"error": error_message}, status=500)
