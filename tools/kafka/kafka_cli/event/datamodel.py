from datetime import datetime
class Event:
    def __init__(self, datetime: datetime, payload: str):
        self.datetime = datetime
        self.payload = payload

    def __str__(self):
        return '%s (%s)' % (self.datetime, self.payload)
