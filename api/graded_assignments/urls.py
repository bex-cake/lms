from django.urls import path
from api.views import GradedAssignmentListView, GradedAssignmentCreateView

urlpatterns = [
    path('assignments/', GradedAssignmentListView.as_view()),
    path('assignments/create/', GradedAssignmentCreateView.as_view()),
]
