FROM python:3.11-slim
WORKDIR /work
# linux depedencies
#RUN apt update -y && apt install python3-dev libpq-dev -y 
RUN pip install --upgrade pip && pip install poetry 
COPY poetry.lock README.md pyproject.toml /work/
COPY static/ /work/static
RUN poetry install 
CMD ["/bin/bash"]