from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from base.models import User
from base.serializers.user_serializer import User_Login_Serializer
from base.serializers.user_serializer import User_Register_Serializer
from django.contrib.auth import login, authenticate
from django.contrib.sessions.models import Session


@api_view(['GET'])
def getUsers(request):
    user = User.objects.all()
    serializer = User_Register_Serializer(user, many = True)
    return Response(serializer.data)


@api_view(['POST'])
def addUser(request):
    serializer = User_Register_Serializer(data = request.data)   
    if 'username' in request.data:
        check_username_exists = User.objects.filter(username = request.data['username'])
        if check_username_exists.exists():
            return Response({"message" : F"User with username {request.data['username']} already exists"}, status = status.HTTP_409_CONFLICT)
        else:
            if serializer.is_valid():
                serializer.save()
                return Response({"message" : f"User added successfully"}, status = status.HTTP_201_CREATED)
            else:
                return Response(serializer.error, status = status.HTTP_400_BAD_REQUEST)
            
@api_view(['POST'])
def findUser(request):
    try:
        user = User.objects.get(
            username=request.data['username'],
            email=request.data['email'],
            password=request.data['password']
        )
        if user:
            return Response({"message": "User exists"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
    
    
@api_view(['POST'])
def authUser(request):
    try:
        user = User.objects.get(
            username=request.data['username'],
            email=request.data['email'],
            password=request.data['password']
        )
        if user:
            authenticate(
                username = user.username,
                email = user.email,
                password = user.password
            )
            login(request, user)
            request.session.save()
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Authentication failed'}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
    


@api_view(['GET'])
def validateUser(request):
    try:
        session = Session.objects.get(session_key=request.COOKIES.get('sessionid'))
        if session:
            return Response({"message": "Keep it logged in"}, status=status.HTTP_200_OK)

    except Session.DoesNotExist:
        return Response({"message": "No Session Id", "redirect" : "/login"}, status=status.HTTP_401_UNAUTHORIZED)


    
    
    


            

            
