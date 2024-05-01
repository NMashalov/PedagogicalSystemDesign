from django.shortcuts import render

from rest_framework.decorators import action
from rest_framework.response import Response

from rest_framework.decorators import api_view,  permission_classes, authentication_classes

from rest_framework.permissions import IsAuthenticated

from rest_framework.authentication import SessionAuthentication

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([SessionAuthentication])
def snippet_list(request):
    return Response({
        'data': UserSerializer(request.user).data
    })


def room(request, room_name):
    return render(request, "webchat/room.html", {"room_name": room_name})