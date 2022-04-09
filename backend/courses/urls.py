from django.urls import path
from .views import CoursesDetailDestroy, CoursesListView, LessonsListUpdateDestroyView

app_name = 'courses'

urlpatterns = [
    path('', CoursesListView.as_view(), name='courses'),
    path('<int:pk>/', CoursesDetailDestroy.as_view(), name='course-details'),
    path('lesson/<int:pk>', LessonsListUpdateDestroyView.as_view(), name='lesson-details')
]