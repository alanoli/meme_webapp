import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text } from 'react-konva';

class App extends Component {
    handleDragStart = e => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    };
    handleDragEnd = e => {
        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5
        });
    };
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text text="Try to drag a star" />
                    {[...Array(10)].map((_, i) => (
                        <Star
                            key={i}
                            x={Math.random() * window.innerWidth}
                            y={Math.random() * window.innerHeight}
                            numPoints={5}
                            innerRadius={20}
                            outerRadius={40}
                            fill="#89b717"
                            opacity={0.8}
                            draggable
                            rotation={Math.random() * 180}
                            shadowColor="black"
                            shadowBlur={10}
                            shadowOpacity={0.6}
                            onDragStart={this.handleDragStart}
                            onDragEnd={this.handleDragEnd}
                        />
                    ))}
                </Layer>
            </Stage>
        );
    }
}

render(<App />, document.getElementById('root'));







import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const URLImage = ({ image }) => {
    const [img] = useImage(image.src);
    return (
        <Image
            image={img}
            x={image.x}
            y={image.y}
            // I will use offset to set origin to the center of the image
            offsetX={img ? img.width / 2 : 0}
            offsetY={img ? img.height / 2 : 0}
        />
    );
};

const App = () => {
    const dragUrl = React.useRef();
    const stageRef = React.useRef();
    const [images, setImages] = React.useState([]);
    return (
        <div>
            Try to trag and image into the stage:
            <br />
            <img
                alt="lion"
                src="https://konvajs.org/assets/lion.png"
                draggable="true"
                onDragStart={e => {
                    dragUrl.current = e.target.src;
                }}
            />
            <div
                onDrop={e => {
                    // register event position
                    stageRef.current.setPointersPositions(e);
                    // add image
                    setImages(
                        images.concat([
                            {
                                ...stageRef.current.getPointerPosition(),
                                src: dragUrl.current
                            }
                        ])
                    );
                }}
                onDragOver={e => e.preventDefault()}
            >
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ border: '1px solid grey' }}
                    ref={stageRef}
                >
                    <Layer>
                        {images.map(image => {
                            return <URLImage image={image} />;
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};

render(<App />, document.getElementById('root'));







import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Circle } from 'react-konva';

function generateItems() {
    const items = [];
    for (let i = 0; i < 10; i++) {
        items.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            id: 'node-' + i,
            color: Konva.Util.getRandomColor()
         });
    }
    return items;
}

class App extends Component {
    state = {
        items: generateItems()
    };
    handleDragStart = e => {
        const id = e.target.name();
        const items = this.state.items.slice();
        const item = items.find(i => i.id === id);
        const index = items.indexOf(item);
        // remove from the list:
        items.splice(index, 1);
        // add to the top
        items.push(item);
        this.setState({
            items
        });
    };
    onDragEnd = e => {
        const id = e.target.name();
        const items = this.state.items.slice();
        const item = this.state.items.find(i => i.id === id);
        const index = this.state.items.indexOf(item);
        // update item position
        items[index] = {
            ...item,
            x: e.target.x(),
            y: e.target.y()
        };
        this.setState({ items });
    };
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {this.state.items.map(item => (
                        <Circle
                            key={item.id}
                            name={item.id}
                            draggable
                            x={item.x}
                            y={item.y}
                            fill={item.color}
                            radius={50}
                            onDragStart={this.handleDragStart}
                            onDragEnd={this.handleDragEnd}
                        />
                    ))}
                </Layer>
            </Stage>
        );
    }
}

render(<App />, document.getElementById('root'));







import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text } from 'react-konva';

class App extends Component {
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try to drag a star" />
          {[...Array(10)].map((_, i) => (
            <Star
              key={i}
              x={Math.random() * window.innerWidth}
              y={Math.random() * window.innerHeight}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={Math.random() * 180}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));
