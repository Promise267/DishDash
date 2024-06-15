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

@api_view(['POST'])
def addUser(request):
    serializer = User_Serializer(data=request.data)
    if 'username' in request.data:
        check_existing_user_with_username = User.objects.filter(username=request.data['username'])
        if check_existing_user_with_username.exists():
            return Response({"message": f"User with username {request.data['username']} already exists"}, status=status.HTTP_409_CONFLICT)
        else:
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "User added successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
