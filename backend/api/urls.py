
from django.urls import path
from . import views

urlpatterns = [
    path('query_llm/', views.query_llm, name='query_llm'),
]
