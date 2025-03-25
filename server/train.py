import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Sample dataset (real-world data should be larger )
data = {
    'study_hours': [5, 3, 4, 5, 6, 7, 8, 10, 12, 14, 6, 9, 6, 4, 7, 8, 10, 9, 5, 15],
    'sleep_hours': [6, 7, 5, 6, 8, 9, 4, 3, 5, 6, 7, 8, 8, 12, 10, 7, 6, 5, 11, 4],
    'revision_frequency': [2, 3, 1, 2, 4, 5, 4, 5, 3, 6, 2, 6, 4, 3, 1 , 6, 5, 4, 3, 7], 
    'exam_stress_level': [3, 4, 5, 2, 1, 2, 3, 1, 2, 1, 4, 2, 3, 5, 4, 3, 1, 2, 4, 1],  
    'previous_scores': [30, 45, 25, 40, 70, 80, 75, 90, 94, 96, 40, 75, 50, 15, 45, 72, 95, 80, 35, 98], 
    'performance_label': [1, 1, 0, 1, 2, 3, 2, 3, 3, 3, 1, 2, 1, 0, 1, 2, 3, 3, 1, 3 ]  
}

df = pd.DataFrame(data)

# Split data
X = df.drop('performance_label', axis=1)
y = df['performance_label']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# Train Random Forest Model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)


# Make predictions on the test set
y_pred = model.predict(X_test)


# Save model
joblib.dump(model, 'models/randomForest.pkl')


print("Server is running")