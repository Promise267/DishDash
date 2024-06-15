from rest_framework import serializers
from base.models import Review

class Review_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'