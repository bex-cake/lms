from rest_framework.routers import DefaultRouter

from api.views import CourseListView

router = DefaultRouter()
router.register(r'', CourseListView.as_view(), base_name='courses')
urlpatterns = router.urls
