from .settings import Auction
from .settings import SettingsManager

def main():
    cfg = SettingsManager.init_cfg()
    Auction.from_cfg(cfg)

   
