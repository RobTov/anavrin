from rest_framework import generics
from .models import HabitsModel, Title, UserHabitsModel
from .serializers import HabitsSerializer, TitleSerializer, UserHabitsSerializer


class TitleDetail(generics.RetrieveUpdateAPIView):
    lookup_field = 'pk'
    queryset = Title.objects.all()
    serializer_class = TitleSerializer

title_detail_view = TitleDetail.as_view()

class HabitsListCreateView(generics.ListCreateAPIView):
    queryset = HabitsModel.objects.all()
    serializer_class = HabitsSerializer

habits_list_create_view = HabitsListCreateView.as_view()

class HabitsDetailUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'
    queryset = HabitsModel.objects.all()
    serializer_class = HabitsSerializer

habits_detail_ud = HabitsDetailUpdateDeleteView.as_view()


class UserHabitsListCreateView(generics.ListCreateAPIView):
    queryset = UserHabitsModel.objects.all()
    serializer_class = UserHabitsSerializer

user_habits_list_create_view = UserHabitsListCreateView.as_view()

class UserHabitsDetailUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'
    queryset = UserHabitsModel.objects.all()
    serializer_class = UserHabitsSerializer

user_habits_detail_ud = UserHabitsDetailUpdateDeleteView.as_view()