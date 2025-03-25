from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class EventView(APIView):
    def get(self, request):
        # Example data you could replace with real data fetching logic
        event_data = {
            'event_name': 'New Animation Event',
            'animation_type': 'Rotate Cube',
            'description': 'Triggers an animation when clicked.'
        }
        return Response(event_data, status=status.HTTP_200_OK)
