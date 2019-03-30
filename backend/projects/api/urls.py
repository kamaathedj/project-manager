from .views import projectViewsets
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'',projectViewsets,base_name='Projects')
urlpatterns=router.urls


