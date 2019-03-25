from rest_framework import serializers
from projects.models import projects

class projectSerializer(serializers.ModelSerializer):
    class Meta:
        model=projects
        fields=('id','title','category','done','updated')