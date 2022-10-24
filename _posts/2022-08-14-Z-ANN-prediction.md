---
layout: post
title: "Artificial Neural Network for diabetes prediction"
author: "Guillermo Villanueva"
categories: journal
tags: [documentation,sample]
image: diabetes.jpeg
tags:
- Artificial Neural Network
- Python
- Keras
---

Diabetes is a chronic health condition that affects a huge number of the population throughout the world.


<div class="highlight-note"><i class="fa fa-info-circle" aria-hidden="true"></i><span>Note</span></div>
<div class="highlights-note"> 
<p>Diabetes is a health disorder that results in an increase in blood glucose level.</p>
</div>

In this project, we will implement an Artificial Neural Network (ANN) for diabetes predictions in order to predict the onset of diabetes based on a set of diagnostic measures.

## Model
Among the different machine learning (ML) models used for diabetes prediction such as support vector machines (SVM), decision trees (DT) or random forest (RF), we will focus on artificial neural networks (ANN). 

<div class="highlight-note"><i class="fa fa-info-circle" aria-hidden="true"></i><span>Note</span></div>
<div class="highlights-note"> 
<p>An artificial neural network is a model inspired by the structure of neural networks in the brain.</p>
</div>

ANN consist of a large number of basic units called neurons that are connected to each other. A neural network can be described as a directed graph whose nodes correspond to neurons and edges to links between them. Each neuron receives as inputs a weighted sum of the outputs of the neurons connected to its incomming edges. ANN uses an activation functions to transform the sum of weighted inputs given at a node into activation of that node.


## Data

We will use the publicly available <a href="https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database" style="color: rgb(165, 15, 15);text-decoration:none; :hover { color: black;};">Pima Indians Diabetes dataset</a>. It describes patient medical record data for 768 women patients and whether they had an onset of diabetes within five years. It is binary classification problem and all the input variables that describe each patient are numerical. The variables can be summarized as follows:

1. _Pregnant_: number of times pregnant.
2. _Glucose_: plasma glucose concentration a two hours in an oral glucose tolerance test.
3. _Pressure_: diastolic blood pressure.
4. _Triceps_: Triceps skin fold thickness
5. _Insulin_: 2-h serum insulin.
6. _Mass_: body mass index.
7. _Pedigree_: diabetes pedigree function.
8. _Age_: age
9. _Diabetes_: class variable (0 or 1).

## Implementation
The following network architecture will be implemented:

1. Input layer.
2. Layer dense with 20 nodes.
3. Layer dense with 10 nodes.
4. Output layer.

In order to implement it, we will use the python API <a href="https://keras.io/" style="color: rgb(165, 15, 15);text-decoration:none; :hover { color: black;};">Keras</a>, built on top of TensorFlow. The source code can be found in <a href="https://github.com/guillermovillanuevabenito/ANN_diabetes" style="color: rgb(165, 15, 15);text-decoration:none; :hover { color: black;};">GitHub-ANN-diabetes</a>.

## Data Pre-Processing
We firtly removed instances with missing values. They correspond to patients with glucose, blood pressure, skin thickness, insulin or BMI set to zero.

<div style="padding-bottom:110%; position:relative; display:block; width: 100%; height: 100%; z-index:10">
  <iframe width="100%" height="100%"
    src = "/assets/plot3.html"
    frameborder="0" style="position:absolute; top:0; left: 0">
  </iframe>
</div>

## Results

```python
model_1 = tf.keras.models.Sequential()
model_1.add(tf.keras.layers.Dense(units=20, activation='relu',input_shape = [8]))
model_1.add(tf.keras.layers.Dense(units=10, activation='relu'))
model_1.add(tf.keras.layers.Dense(units=1, activation='relu'))

model_1.summary()
model_1.compile(
    loss='binary_crossentropy',
    optimizer= "adam",
    metrics=[tf.keras.metrics.BinaryAccuracy(name='accuracy')]
)
history = model_1.fit(X_train, y_train, epochs=50,batch_size = 5,validation_split = 0.2)
```

## Results

When evaluating our ANN we have obtained an accuracy of 0.71.

```python
y_pred = model_1.predict(X_test)
test_loss, test_acc = model_1.evaluate(X_test, y_test)
```
We also show the training and test accuracy and loss during the training phase.

![Training errors](/assets/img/Figure_1.png)

## To be continued...

We notice that the final model accuracy could be improved. A quickly internet inspection shows that higher accuracies have been obtained. 

In a future work, we will dig deeper into the network architecture and hyperparameters, and also test different approaches.

