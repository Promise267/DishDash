from rest_framework import serializers
from base.models import Recipe

class Recipe_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'