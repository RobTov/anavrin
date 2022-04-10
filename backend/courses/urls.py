from django.urls import path
from .views import CoursesDetailDestroy, CoursesListView, LessonsListUpdateDestroyView, LessonsList

app_name = 'courses'

urlpatterns = [
    path('', CoursesListView.as_view(), name='courses'),
    path('<int:pk>/', CoursesDetailDestroy.as_view(), name='course-details'),
    path('lesson/', LessonsList.as_view(), name='lesson-list'),
    path('lesson/<int:pk>/', LessonsListUpdateDestroyView.as_view(), name='lesson-details')
]