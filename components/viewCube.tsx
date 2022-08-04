import { useState } from "react";

export const ViewCube = () => {
  const [rotation, setRotation] = useState(
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
  );
  const randomRotate = (x: number, y: number, z: number) => {
    setRotation(`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
  };
  return (
    <div className="scene bg-bluse-200">
      <div
        style={{
          transform: `translateZ(-100px) ${rotation}`,
        }}
        className="cube"
      >
        <div
          style={{ transform: `rotateY(0deg) translateZ(100px)` }}
          className="cube__face"
          onClick={() => randomRotate(0, 0, 0)}
        >
          FRONT
        </div>
        <div
          style={{ transform: `rotateY(180deg) translateZ(100px)` }}
          className="cube__face"
          onClick={() => randomRotate(0, 180, 0)}
        >
          BACK
        </div>
        <div
          style={{ transform: `rotateY(90deg) translateZ(100px)` }}
          className="cube__face"
          onClick={() => randomRotate(0, -90, 0)}
        >
          RIGHT
        </div>
        <div
          style={{ transform: `rotateY(-90deg) translateZ(100px)` }}
          className="cube__face"
          onClick={() => randomRotate(0, 90, 0)}
        >
          LEFT
        </div>
        <div
          style={{ transform: `rotateX(90deg) translateZ(100px)` }}
          className="cube__face"
          onClick={() => randomRotate(-90, 0, 0)}
        >
          TOP
        </div>
        <div
          style={{ transform: `rotateX(-90deg) translateZ(100px)` }}
          className="cube__face"
          onClick={() => randomRotate(90, 0, 0)}
        >
          BOTTOM
        </div>
      </div>
      <button
        className="mt-10 bg-blue-500"
        onClick={() =>
          randomRotate(
            Math.random() * 180,
            Math.random() * 180,
            Math.random() * 180
          )
        }
      >
        Random rotate
      </button>
    </div>
  );
};
