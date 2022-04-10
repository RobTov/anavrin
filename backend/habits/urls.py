from django.urls import path
from . import views

app_name = 'habits'

urlpatterns = [
    path('', views.habits_list_create_view),
    path('title/<int:pk>/', views.title_detail_view),
    path('<int:pk>/', views.habits_detail_ud),
    path('custom/', views.user_habits_list_create_view),
    path('custom/<int:pk>/', views.user_habits_detail_ud),
    path('custom/task/', views.task_list_view),
    path('custom/task/<int:pk>/', views.task_detail_upgrade)
]