# CSAT Calculator

A lightweight web tool that calculates CSAT performance, identifies gaps to target, and simulates the impact of future interactions.

It is designed for support operations where teams need to quickly understand how many positive interactions are required to reach a CSAT goal.

---

## ⚙️ How it works

The calculator uses the following inputs:

- Total interactions
- Negative ratings
- Target CSAT (meta)

### Core calculation

csat = (good_interactions / total) × 100

Where:

good_interactions = total - bads

---

## 🎯 Goal projection

The tool estimates how many additional positive interactions are needed to reach the target CSAT:

- If already on target → shows ✓ On target
- If not → shows number of required positive interactions

---

## 📊 Impact simulation

The calculator also simulates:

- Impact of one additional positive interaction
- Impact of one additional negative interaction
- Gap between current CSAT and target

---

## 🌐 Output language

The interface is in English, but the tool is intended for operational use in Brazilian support environments.

---

## 🧠 Notes

- Invalid or empty inputs are rejected
- Negative ratings cannot exceed total interactions
- CSAT values are displayed with 2 decimal precision
- Designed for quick operational decision-making
