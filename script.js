:root {
  --green: #21734c;
  --dark: #173b2b;
  --light: #f2f8f1;
  --orange: #b86b16;
  --red: #bd3e3e;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #24352b;
  background: #f5f7f4;
  line-height: 1.5;
}

.hero {
  background: linear-gradient(120deg, #174b35, #39865a);
  color: white;
  padding: 36px max(5%, calc((100% - 1100px) / 2));
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.hero h1 {
  margin: 4px 0;
  font-size: clamp(2rem, 5vw, 3.2rem);
}

.hero p {
  margin-bottom: 0;
}

.eyebrow {
  letter-spacing: 2px;
  font-size: 0.75rem;
  font-weight: bold;
}

.hero-tag {
  border: 1px solid #ffffff80;
  padding: 10px 16px;
  border-radius: 30px;
}

.container {
  max-width: 1100px;
  margin: 28px auto;
  padding: 0 18px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 22px;
}

.stat-card, .panel {
  background: white;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 4px 18px #173b2b0b;
}

.stat-card span {
  display: block;
  color: #68766c;
  font-size: 0.9rem;
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  margin-top: 6px;
  color: var(--green);
}

.panel {
  margin-bottom: 22px;
}

h2 {
  margin-top: 0;
  color: var(--dark);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-weight: 600;
  font-size: 0.92rem;
}

input, select {
  width: 100%;
  min-width: 0;
  padding: 12px;
  border: 1px solid #d8e1d9;
  border-radius: 9px;
  background: white;
  font: inherit;
  color: #24352b;
}

button {
  border: 0;
  padding: 12px 18px;
  border-radius: 9px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

button:focus-visible, input:focus-visible, select:focus-visible {
  outline: 3px solid #85c6a1;
  outline-offset: 2px;
}

.primary-btn {
  background: var(--green);
  color: white;
  margin-top: 18px;
}

.secondary-btn {
  background: #e4f1e6;
  color: var(--green);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.section-heading p, .muted {
  color: #68766c;
  margin-top: -8px;
}

.section-heading select {
  max-width: 180px;
}

.alerts {
  margin: 12px 0;
  color: var(--red);
  font-weight: 600;
}

.food-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.food-card {
  border: 1px solid #e1e8e1;
  border-radius: 12px;
  padding: 16px;
  overflow-wrap: anywhere;
}

.food-card h3 {
  margin: 0 0 5px;
}

.food-card p {
  margin: 5px 0;
  color: #66746a;
}

.status {
  display: inline-block;
  border-radius: 20px;
  padding: 4px 9px;
  font-size: 0.78rem;
  font-weight: bold;
  margin: 8px 0;
}

.status.fresh {
  background: #e1f4e6;
  color: #21673a;
}

.status.soon {
  background: #fff0d5;
  color: #88500a;
}

.status.expired {
  background: #ffe5e5;
  color: #a12828;
}

.delete-btn {
  display: block;
  background: #fff0f0;
  color: #ad3030;
  margin-top: 10px;
  width: 100%;
}

.empty {
  color: #718076;
  padding: 20px 0;
}

.recipe-results {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.recipe-card {
  padding: 14px;
  border-radius: 10px;
  background: var(--light);
}

footer {
  text-align: center;
  color: #718076;
  font-size: 0.85rem;
  padding: 16px;
}

@media (max-width: 600px) {
  .stats {
    gap: 8px;
  }

  .stat-card {
    padding: 12px;
  }

  .stat-card strong {
    font-size: 1.5rem;
  }

  .form-grid, .food-list, .recipe-results {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 16px;
  }

  .section-heading select {
    max-width: none;
  }
}
