name: Add Two Numbers

on: [push]

jobs:
  add:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up Python 3.x
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        #pip install --no-cache-dir .

    - name: Run the Python script
      run: |
        python add.py 5 10
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '14'

    - name: Run the JavaScript script
      run: |
        node add.js 7 8
