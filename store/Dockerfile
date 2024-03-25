FROM python:3.11-slim
WORKDIR /work
# linux depedencies
#RUN apt update -y && apt install python3-dev libpq-dev -y 
RUN pip install --upgrade pip && pip install poetry 
COPY poetry.lock README.md pyproject.toml /work/
COPY store/ /work/store
RUN poetry install --without dev
CMD ["/bin/bash"]