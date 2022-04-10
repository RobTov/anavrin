from rest_framework import generics
from .models import HabitsModel, Title, UserHabitsModel, Tasks
from .serializers import HabitsSerializer, TitleSerializer, UserHabitsSerializer, TasksSerializer


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

class TaskListView(generics.ListAPIView):
    queryset = Tasks.objects.all().order_by('-pk')
    serializer_class = TasksSerializer

task_list_view = TaskListView.as_view()

class TaskDetailUpgrade(generics.RetrieveUpdateAPIView):
    lookup_field = 'pk'
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer


task_detail_upgrade = TaskDetailUpgrade.as_view()