from csv import DictReader
from pathlib import Path


def csv_iterator(path: Path):
    with path.open("r") as csv_file:
        for row in DictReader(csv_file):
            yield row
