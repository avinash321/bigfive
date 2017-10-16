from django import forms

from .models import Answers

class mytableForm(forms.ModelForm):

    class Meta:
        model = Answers
        fields = ('name', 'answers','score')
