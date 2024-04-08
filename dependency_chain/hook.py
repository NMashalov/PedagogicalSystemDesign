import typing as tp


T = tp.TypeVar('T')

class CfgHook:
    def __init__(self,default: tp.Generic[T]):
        self.cfg = default

    def set_cfg(self, value: tp.Generic[T]):
        self.cfg = value


class DbManager:
    def __init__(self):
        self.conn_url = CfgHook()

    def run(self,value=):
        self.conn_url.set_cfg(value)


class StoreManager:
    def __init__(self):


