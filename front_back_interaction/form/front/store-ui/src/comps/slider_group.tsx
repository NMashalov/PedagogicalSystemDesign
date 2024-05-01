import { Slider, SliderSingleProps } from "antd";


const marks: SliderSingleProps['marks'] = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: { color: '#f50' },
      label: <strong>100°C</strong>,
    },
};

export function SliderGroup(){

    return (
        <>
            <Slider vertical defaultValue={30} marks={marks} />
            <Slider vertical defaultValue={30} />
            <Slider vertical defaultValue={30} />
        </>
    )
};