from rest_framework import generics
from .models import Quotes
from .serializers import QuotesSerializer


class RandomQuoteView(generics.ListAPIView):
    queryset = Quotes.objects.all()
    serializer_class = QuotesSerializer

random_quote_view = RandomQuoteView.as_view()