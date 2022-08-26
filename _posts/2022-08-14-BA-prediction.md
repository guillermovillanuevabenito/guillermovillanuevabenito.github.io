---
layout: post
title: "Bayesian analysis prediction of fatal traffic accidents"
author: "Guillermo Villanueva"
categories: journal
tags: [documentation,sample]
image: traffic_accident.jpeg
tags:
- Statistics
- Bayesian regression
- Python
- R
- Stan 
---

The number of accidents that take place on the roads and cause deaths has been a constant matter of concern during the last decades. In the year 2019 there were 104080 traffic accidents with victims in Spain, which led to a total of 1755 deaths. The aim of this study is to estimate the probability of an accident being fatal (leading to one or more deaths) and to find out which variables have an impact on this probability, as well as to know the magnitude of the influence that each of the explanatory variables have on the response. Hence, we could know what to improve in order to reduce the number of fatalities
on Spanish roads.

In the present project, after introducing the variables of interest and the data of use, we are going to create different Bayesian models to answer our questions. The first model built will be a pooled Bayesian model in which we will use several variables, with the goal of differentiating the variables that are relevant to those that are not. We will use this model to predict the proportion of deadly accidents of other years. Secondly, we will build a simpler model with those variables that are more relevant to see if we can still predict the results accurately with it.

The major result in terms of prediction is summarize in the following sentence:

_"given an accident with victims, if we know the type of road and the time when it took place, the proposed simplified Bayesian model is able to predict, with probability 2/3, whether or not there was at least one death."_

You can download the project [here]({{ site.url }}/assets/BA_project.pdf)
