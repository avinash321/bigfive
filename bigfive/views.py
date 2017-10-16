from django.shortcuts import render
import logging
from .models import Answers
from django.views.decorators.csrf import csrf_protect, csrf_exempt

from .models import Answers
import ast
import json

import unicodedata
import collections

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt

# Create your views here.
# Logger
LOG_FILENAME = 'example.log'
logging.basicConfig(filename=LOG_FILENAME,level=logging.DEBUG)

@csrf_exempt
def tipi_test(request):
    if request.POST:
        mydata = request.POST;
        mydata = mydata.dict()
        for i in mydata:
            mydata = i
            mydata = eval(mydata)

        name = mydata.get('name')
        answers = mydata.get('answers')
        score = mydata.get('score')

        ans_dict = {}
        for i in range(len(answers)):
            ans_dict["q" + str(i + 1)] = answers[i]

        score_dict = {}
        plist = ["E", "A", "C","N", "O"]
        for i in range(len(score)):
            #score_dict["q" + str(i + 1)] = score[i]
            score_dict[plist[i]] = score[i]

        ans = Answers.objects.create(name=name, answers=ans_dict,score= score_dict)
        return render(request, 'bigfive/tipi_test.html',{})
    else:
        return render(request, 'bigfive/tipi_test.html', {})
def test(request):
    return render(request, 'bigfive/test.html',{})
