---
template: BlogPost
path: /stock-with-clever-tickers
date: 2020-01-10T09:15:50.738Z
title: Rose flower, plotting with sin(x) and sin(y) (in R)
thumbnail: /assets/image-11.jpg
metaDescription: x = x+pi*sin(y), y = y+ pi*sin(x)
---
x = x+pi*sin(y), y = y+ pi*sin(x)


```python
# Typical libraries for data manipulation and visualisation
import pandas 
import datetime 
import numpy 
import matplotlib.pyplot as plt
from matplotlib import style
import plotly.express as px
import warnings
warnings.filterwarnings("ignore")

# For reading stock data from yahoo
import pandas_datareader as web
import yfinance as yf

# For time stamps
from datetime import datetime
```