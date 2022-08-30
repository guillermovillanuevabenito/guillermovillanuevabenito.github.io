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


<div class="highlight-RST"><i class="fa fa-info-circle" aria-hidden="true"></i><span>Note</span></div>
<div class="highlights"> 
<p>Diabetes is a health disorder that results in an increase in blood glucose level.</p>
</div>

In this project, we will implement an Artificial Neural Network (ANN) for diabetes predictions in order to predict the onset of diabetes based on a set of diagnostic measures.

## Model
Among the different machine learning (ML) models used for diabetes predictions such as support vector machines (SVM), decision trees (DT) or random forest (RF), we will focus on artificial neural networks (ANN).


<div class="highlight-RST"><i class="fa fa-info-circle" aria-hidden="true"></i><span>Note</span></div>
<div class="highlights"> 
<p>An artificial neural network is a model inspired by the structure of neural networks in the brain.</p>
</div>

ANN consist of a large number of basic units called neurons that are connected to each other. A neural network can be described as a directed graph whose nodes correspond to neurons and edges to links between them. Each neuron receives as inputs a weighted sum of the outputs of the neurons connected to its incomming edges.

ANN uses an activation functions to transform the sum of weighted inputs given at a node into activation of that node.


## Data

We will use the publicly available <a href="https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database" style="color: rgb(165, 15, 15);text-decoration:none; :hover { color: black;};">"Pima Indians Diabetes dataset"</a>. It describes patient medical record data for 768 women patients and whether they had an onset of diabetes within five years. It is binary classification problem and all the input variables that describe each patient are numerical. The variables can be summarized as follows:

1. _pregnant_: number of times pregnant.
2. _glucose_: plasma glucose concentration a two hours in an oral glucose tolerance test.
3. _pressure_: diastolic blood pressure.
4. _triceps_: Triceps skin fold thickness
5. _insulin_: 2-h serum insulin.
6. _mass_: body mass index.
7. _pedigree_: diabetes pedigree function.
8. _age_: age
9. _diabetes_: class variable (0 or 1).

## Implementation
We will implement the following architecture:

1. Input layer.
2. Layer dense with 20 nodes.
3. Layer dense with 10 nodes.
4. Output layer.

We will use the python API Keras which is built on top of TensorFlow in order to implement the above architecture.

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

When evaluating our ANN we have obtained an accuracy of $0.71$.

```python
y_pred = model_1.predict(X_test)
test_loss, test_acc = model_1.evaluate(X_test, y_test)
```
We also show the training and test accuracy and loss during the training phase.

![Training errors](/assets/img/Figure_1.png)

## Conclusion

We notice that the final model accuracy obtained is not the best one and that the model could be improved. However, for the purpose of this post it is good enough.
