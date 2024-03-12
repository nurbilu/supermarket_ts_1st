# admin.py

from django.contrib import admin
from .models import Category, Product, Order, OrderDetails

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', 'price')
    list_filter = ('category',)

# admin.site.register(Order)
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'date_ordered', 'is_complete')
    list_filter = ('id', 'user', 'date_ordered', 'is_complete')


@admin.register(OrderDetails)
class OrderDetailsAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'product', 'quantity', 'subtotal')
    list_filter = ('order__user', 'product__category')

