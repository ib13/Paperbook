from rest_framework import serializers
# What serializers do is that they convert json data to a model(class) and vice versa

from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content')
