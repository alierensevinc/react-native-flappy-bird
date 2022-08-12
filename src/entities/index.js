import Matter from "matter-js";
import BirdComponent from "../components/birdComponent";
import FloorComponent from "../components/floorComponent";
import ObstacleComponent from "../components/obstacleComponent";
import {getPipeSizePosPair} from "../utils/random";
import {Dimensions} from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;

    world.gravity.y = 1.2;

    const pipeSizeForPosA = getPipeSizePosPair();
    const pipeSizeForPosB = getPipeSizePosPair(windowWidth * 0.9);

    return {
        physics: {engine, world},
        Bird: BirdComponent(world, 'green', {x: 50, y: 200}, {height: 40, width: 40}),
        Floor: FloorComponent(world, 'green', {x: windowWidth / 2, y: windowHeight}, {height: 50, width: windowWidth}),
        ObstacleTop1: ObstacleComponent(world, 'ObstacleTop1', 'red', pipeSizeForPosA.pipeTop.pos, pipeSizeForPosA.pipeTop.size),
        ObstacleBottom1: ObstacleComponent(world, 'ObstacleBottom1', 'blue', pipeSizeForPosA.pipeBottom.pos, pipeSizeForPosA.pipeBottom.size),
        ObstacleTop2: ObstacleComponent(world, 'ObstacleTop2', 'red', pipeSizeForPosB.pipeTop.pos, pipeSizeForPosB.pipeTop.size),
        ObstacleBottom2: ObstacleComponent(world, 'ObstacleBottom2', 'blue', pipeSizeForPosB.pipeBottom.pos, pipeSizeForPosB.pipeBottom.size),
    }
}