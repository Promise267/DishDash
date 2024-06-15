from rest_framework import serializers
from base.models import Ingredient

class Ingredient_Serializer(serializers.ModelSerialzer):
    class Meta:
        model = Ingredient
        fields = '__all__'

