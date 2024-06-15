from rest_framework import serializers
from base.models import User

class User_Login_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class User_Register_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'