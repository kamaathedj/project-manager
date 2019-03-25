from django.urls import path ,include
from .views import projectDetailView,projectListView

urlpatterns = [
    path('', projectListView.as_view()),
    path('<pk>', projectDetailView.as_view()),    
]