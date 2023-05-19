import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import { motionComponents, looksComponents } from "./SidebarConstants";
import { Chip } from "@material-ui/core";

export default function Sidebar() {
  const [activeChip, setActiveChip] = useState("motion");
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold mb-5 text-center p-2 w-auto">Side bar</div>
      <div className="flex flex-wrap">
        <div className="m-1">
          <Chip
            label="Motion"
            variant={activeChip === "motion" ? "default" : "outlined"}
            color="primary"
            onClick={() => {
              setActiveChip("motion");
            }}
          />
        </div>
        <div className="m-1">
          <Chip
            label="Looks"
            style={
              activeChip === "looks"
                ? { backgroundColor: "#7B1FA2", color: "#fff" }
                : {
                    backgroundColor: "#fff",
                    border: "1px solid #7B1FA2",
                    color: "#7B1FA2",
                  }
            }
            variant={activeChip === "looks" ? "default" : "outlined"}
            onClick={() => {
              setActiveChip("looks");
            }}
          />
        </div>
        {/* <Chip label="Clickable" variant="outlined" className="m-1" />
        <Chip label="Clickable" variant="outlined" className="m-1" /> */}
      </div>
      {activeChip === "motion" ? (
        <>
          <Droppable droppableId="sideArea-motion" type="COMPONENTS">
            {(provided) => (
              <ul
                className="sideArea-motion my-3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {motionComponents.map((x, i) => {
                  return (
                    <Draggable
                      key={`${x}-sideArea`}
                      draggableId={`${x}-sideArea`}
                      index={i}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="my-2"
                        >
                          {getComponent(x)}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </>
      ) : (
        <>
          <Droppable droppableId="sideArea-looks" type="COMPONENTS">
            {(provided) => (
              <ul
                className="sideArea-looks my-3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {looksComponents.map((x, i) => {
                  return (
                    <Draggable
                      key={`${x}-sideArea`}
                      draggableId={`${x}-sideArea`}
                      index={i}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="my-2"
                        >
                          {getComponent(x)}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </>
      )}
    </div>
  );
}
