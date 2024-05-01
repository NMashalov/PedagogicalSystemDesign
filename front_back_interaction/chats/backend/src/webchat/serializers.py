from rest_framework import status
from webchat.models import ChatMessage
from rest_framework import serializers
from rest_framework.response import Response



class ChatMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChatMessage
        fields = ('id','role','text')

class ChatSerializer(serializers.ModelSerializer):

    chat_messages = ChatMessageSerializer(many=True)

    class Meta:
        model = ChatMessage
        fields = ('id','role','text','chat_messages')

