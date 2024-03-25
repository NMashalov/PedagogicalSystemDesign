FROM python:3.11-slim
WORKDIR /work
RUN pip install --upgrade pip && pip install poetry
COPY poetry.lock README.md pyproject.toml /work/
COPY store/ /work/store
RUN poetry install
CMD ["/bin/bash"]