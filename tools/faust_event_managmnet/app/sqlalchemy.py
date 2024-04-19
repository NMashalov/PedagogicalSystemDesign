from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import logging


async def save_currency(self, pair_name: str, value: float) -> None:
   async with AsyncSession(self.db_engine) as session:
       async with session.begin():
           logging.info(f"Save currency {pair_name}: {value}")
           currency = Currencies(pair_name=pair_name, value=value)
           session.add(currency)

async def save_average(self, pair_name: str, value: float) -> None:
   async with AsyncSession(self.db_engine) as session:
       async with session.begin():
           selected_average_execution = await session.execute(
               select(Average).filter(Average.pair_name == pair_name))
           selected_average = selected_average_execution.scalars().first()
           if selected_average:
               logging.info(f"Update existing average {pair_name}: {value}")
               selected_average.value = value
           else:
               logging.info(f"Save average {pair_name}: {value}")
               currency = Average(pair_name=pair_name, value=value)
               session.add(currency)