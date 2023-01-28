FROM python:3.8-slim

RUN mkdir -p /app
WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 9002

CMD ["python", "app.py"]
