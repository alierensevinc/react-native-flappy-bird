import React from 'react';
import {View} from "react-native";

const Bird = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.posiition.x - widthBody / 2;
    const yBody = props.body.posiition.y - heightBody / 2;

    const color = props.color;

    return (
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}/>
    )
}

const bird = (world, color, pos, size) => {
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label: 'Bird'
        }
    )

    Matter.world.add(world, initialBird);

    return {
        body: initialBird,
        color,
        pos,
        size,
        renderer: <Bird/>
    }
}

export default bird;