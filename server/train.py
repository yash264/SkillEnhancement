import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
import joblib
import random

# Sample dataset (real-world data should be larger )
data = {
    'study_hours': [random.randint(1, 15) for _ in range(10000)],
    'sleep_hours': [random.randint(4, 15) for _ in range(10000)],
    'revision_frequency': [random.randint(1, 7) for _ in range(10000)], 
    'exam_stress_level': [random.randint(1, 5) for _ in range(10000)], 
    'preperation_level': [random.randint(1, 3) for _ in range(10000)], 
    'performance_scores': [random.randint(20, 80) for _ in range(10000)], 
}


# Performance Score (Target Variable) → Based on other factors
data['performance_scores'] = [
    max(10, min(100,(0.40*sh + 0.20*rf + 0.35*pl - 0.20*es + 0.45*sl) * 10 + random.uniform(-5, 5)))
    for sh, sl, rf, es, pl in zip(
        data['study_hours'],
        data['sleep_hours'],
        data['revision_frequency'],
        data['exam_stress_level'],
        data['preperation_level'],
    )
]

df = pd.DataFrame(data)


# Split data
X = df[['study_hours', 'sleep_hours', 'revision_frequency', 'exam_stress_level', 'preperation_level']]
y = df['performance_scores']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# Train Random Forest Model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)


# Make predictions on the test set
y_pred = model.predict(X_test)


# Calculate Accuracy Metrics
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Print Accuracy Results
print(f"Mean Absolute Error (MAE): {mae:.2f}")
print(f"R² Score: {r2:.2f}")


# Save model
joblib.dump(model, 'models/randomForest.pkl')


print("Server is running")