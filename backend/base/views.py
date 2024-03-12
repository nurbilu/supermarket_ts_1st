# views.py
from rest_framework import generics
from .models import Category, Product, Order, OrderDetails
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer, OrderDetailsSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework import serializers

from django.contrib.auth.models import User
# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

class LogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        request.auth.delete()  # Optional: If you're using Token authentication, you can delete the user's token
        request.session.flush()  # Flush the session data, effectively logging out the user
        return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name', 'last_name']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [AllowAny]
    
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetailsListCreateView(generics.ListCreateAPIView):
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer

class OrderDetailsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer
