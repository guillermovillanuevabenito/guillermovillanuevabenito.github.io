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

The number of accidents that take place on the roads and cause deaths has been a constant matter of concern during the last decades. 

The aim of this study is to estimate the probability of an accident being fatal (leading to one or more deaths) and to find out which variables have an impact on this probability, as well as to know the magnitude of the influence that each of the explanatory variables have on the response. Hence, we could know what to improve in order to reduce the number of fatalities
on Spanish roads.

<div class="highlight-add"><i class="fa fa-plus" aria-hidden="true"></i><span>Info</span></div>
<div class="highlights-add"> 
<p>In the year 2019 there were 104.080 traffic accidents with victims in Spain, which led to a total of 1.755 deaths.</p>
</div>

After introducing the data, we will build and test different Bayesian models to answer the above inquiries. 

The first model will be a pooled Bayesian model in which we will use the full set of explanatory variables in order to find out most relevant variables. Secondly, we will build a simpler model with those variables that are more relevant and check whther or not the model is still able to do an accurate prediction. We will use this model to predict the proportion of deadly accidents of other years.

The major result, in terms of prediction, is summarized in the following sentence:

_"Given an accident with victims, if we know the type of road and the time when it took place, the proposed simplified Bayesian model is able to predict, with probability 2/3, whether or not there was at least one death."_

You can download the project [here]({{ site.url }}/assets/BA_project.pdf). The source code will be soon available on GitHub.

<script src="https://giscus.app/client.js"
        data-repo="guillermovillanuevabenito/guillermovillanuevabenito.github.io"
        data-repo-id="R_kgDOH4qYSg"
        data-category="General"
        data-category-id="DIC_kwDOH4qYSs4CSOxo"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>