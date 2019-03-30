from rest_framework.generics import ListAPIView ,RetrieveAPIView 
from .serializers import projectSerializer
from projects.models import projects


class projectListView(ListAPIView):
    queryset=projects.objects.order_by('-id')
    serializer_class=projectSerializer


class projectDetailView(RetrieveAPIView):
    queryset=projects.objects.all()
    serializer_class=projectSerializer

