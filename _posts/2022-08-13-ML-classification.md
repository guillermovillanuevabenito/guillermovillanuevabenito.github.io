---
layout: post
title: "Traffic accident data multiclass classification"
author: "Guillermo Villanueva"
categories: journal
tags: [documentation,sample]
image: traffic_jam2.jpeg
tags:
- Machine Learning
- SVM
- Random Forest
- Python
---

Multiclass classification is the problem of classifying instances into one of three or more classes. It can be naturally solved by extending the binary classification technique for some algorithm, such as support vector machines (SVMs)


<div class="highlight-note"><i class="fa fa-info-circle" aria-hidden="true"></i><span>Note</span></div>
<div class="highlights-note"> 
<p>In machine learning, classification refers to a predictive problem where a class label is predicted for a given input data.</p>
</div>

Traffic accidents can be classified in 4 classes according to its impact on traffic. In this project, we apply two classification algorithms (SVMs and random forest) to a <a href="https://www.kaggle.com/datasets/sobhanmoosavi/us-accidents" style="color: rgb(165, 15, 15);text-decoration:none; :hover { color: black;};">Traffic accident Dataset</a>.

<div class="highlight-add"><i class="fa fa-plus" aria-hidden="true"></i><span>Info</span></div>
<div class="highlights-add"> 
<p>The car accident dataset covers 49 states of the USA and was collected from February 2016 to December 2021. There are 2.8 million accident records.</p>
</div>

The goal is to predict the degree of impact of an accident given the value of a set of explanatory variables and study the performance of the predictors.

You can download the project [here]({{ site.url }}/assets/ML_project.pdf) and find the source code in <a href="https://github.com/guillermovillanuevabenito/ML_class" style="color: rgb(165, 15, 15);text-decoration:none; :hover { color: black;};">GitHub-classification</a>. 


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