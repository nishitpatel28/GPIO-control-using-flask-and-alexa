import logging
import os

from flask import Flask
from flask_ask import Ask, request, session, question, statement
#import RPi.GPIO as GPIO

app = Flask(__name__)
ask = Ask(app, "/")
logging.getLogger('flask_ask').setLevel(logging.DEBUG)

STATUSON = ['on','high']
STATUSOFF = ['off','low']

"""
#GPIO Setup
GPIO.setmode(GPIO.BCM)
GPIO.setup(17,GPIO.OUT)
"""

@ask.launch
def launch():
    speech_text = 'Welcome to Flask Sample.'
    return question(speech_text).reprompt(speech_text).simple_card(speech_text)


@ask.intent('HelloWorldIntent')
def hello_world():
    speech_text = 'Hello from Flask Sample'
    return statement(speech_text).simple_card('HelloWorld', speech_text)

@ask.intent('GpioIntent',mapping = {'status':'status'})
def Gpio_Intent(status):
    if status in STATUSON:
        #Controlling GPIO
        #GPIO.out(17,GPIO.HIGH)
        return statement('opening {}'.format(status))
    elif status in STATUSOFF:
        #Controlling GPIO
        #GPIO.out(17,GPIO.LOW)
        return statement('closing {}'.format(status))
    #return statement('not sure')

@ask.intent('AMAZON.HelpIntent')
def help():
    speech_text = 'You can say hello to me!'
    return question(speech_text).reprompt(speech_text).simple_card('HelloWorld', speech_text)


@ask.session_ended
def session_ended():
    return "{}", 200


if __name__ == '__main__':
    if 'ASK_VERIFY_REQUESTS' in os.environ:
        verify = str(os.environ.get('ASK_VERIFY_REQUESTS', '')).lower()
        if verify == 'false':
            app.config['ASK_VERIFY_REQUESTS'] = False
    app.run(debug=True)
