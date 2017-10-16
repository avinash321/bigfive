from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.test, name='test'),
    url(r'^test', views.tipi_test, name='tipi_test'),
]