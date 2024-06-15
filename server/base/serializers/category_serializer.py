from rest_framework import serializers
from base.models import Category

class Category_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'