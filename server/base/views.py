from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from base.models import User, Recipe, Category, Ingredient, Review
from base.serializer import User_Serializer, Recipe_Serializer, Category_Serializer, Ingredient_Serializer, Review_Serializer

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = User_Serializer(users, many = True)
    return Response(serializer.data)


    
