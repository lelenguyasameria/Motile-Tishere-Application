from rest_framework import serializers
from base.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        models = User
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        modle = Profile
        fields = ('user', 'first_name', 'last_name', 'email')