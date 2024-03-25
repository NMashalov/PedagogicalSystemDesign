from .settings import Store, StoreConfigs

def main():
    cfg = StoreConfigs() 
    return Store(cfg)