from rest_framework import serializers
from base.models import User, Recipe, Category, Ingredient, Review

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__init__'

class Recipe_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__init__'

class Category_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__init__'

class Ingredient_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__init__'

class Review_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__init__'