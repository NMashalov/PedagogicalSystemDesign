import typing as tp
from pydantic import BaseModel, Field




class Scoring(BaseModel):
    '''
    '''

    action_type: tp.Literal['scoring'] = 'scoring'

    INPUTS: tp.ClassVar = [
        ("Data", ".csv"),
        ("Model", ".pkl"),
    ]
    OUTPUTS: tp.ClassVar = [
        (
            "Score",
            ".csv",
        )
    ]
    threshold: int = Field(description="Score cut off. Below no credit :(")



