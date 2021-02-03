#!/usr/bin/env python
# -*- coding: utf-8 -*- 
"""
Write all your code here....
"""
import time

from luno_python.client import Client
from datetime import datetime

import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

LUNO_API_KEY_ID = os.environ.get("LUNO_API_KEY_ID")
LUNO_API_KEY_SECRET = os.environ.get("LUNO_API_KEY_SECRET")


def ticker():
    
    c = Client(api_key_id=os.getenv(LUNO_API_KEY_ID),
               api_key_secret=os.getenv(LUNO_API_KEY_SECRET))
   
    
    counter = 0
    
    previous_value = 0
    
    while counter < 4:
        try:
            res = c.get_ticker(pair='ETHZAR')

            last_trade = res['last_trade']
            last_trade = round(float(last_trade), 1)

            timestamp = res['timestamp']
            timestamp = datetime.utcfromtimestamp(int(timestamp)/1000).strftime("%Y-%m-%d %H:%M:%S")

            increase = float(last_trade) - previous_value

            # (0% if no previous value known)
            if (previous_value == 0):
                percentage = 0.0 
            else:
                percentage = increase / previous_value * 100
                percentage = round(float(percentage), 4) 
            
            market_ticker_values = str(timestamp) +  " - " "Last trade " + str(last_trade) + " : " + "(" + str(percentage) + "%"+ ")"

            print(market_ticker_values)

            previous_value =  float(last_trade)
            counter = counter + 1  

            #pulls the latest “ETHZAR” pair value every 10 seconds. 
            time.sleep(10)

        except Exception as e:
            counter = counter + 4
            print("Something went wrong")
            print e 
            
    
if __name__ == "__main__":
    ticker()
   

    