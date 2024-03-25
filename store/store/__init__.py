from .settings import Store, StoreConfigs

def app():
    cfg = StoreConfigs() 
    return Store(cfg)