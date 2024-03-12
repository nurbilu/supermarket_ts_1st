# urls.py
from django.contrib.auth import logout
from django.contrib.auth.views import LogoutView
from django.urls import path
from .views import (
    CategoryListCreateView,
    CategoryDetailView,
    ProductListCreateView,
    ProductDetailView,
    OrderListCreateView,
    OrderDetailView,
    OrderDetailsListCreateView,
    OrderDetailsDetailView,
    UserRegisterView,
    
    
)
from .views import LogoutAPIView
urlpatterns = [
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),

    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),

    path('orders/', OrderListCreateView.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),

    path('order-details/', OrderDetailsListCreateView.as_view(), name='order-details-list-create'),
    path('order-details/<int:pk>/', OrderDetailsDetailView.as_view(), name='order-details-detail'),
    path('register/', UserRegisterView.as_view(), name='user-register'),  # Register the user registration endpoint
    path('logout/', LogoutAPIView.as_view(), name='api-logout'),
]