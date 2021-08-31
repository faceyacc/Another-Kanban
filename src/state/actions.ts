import { DragItem } from "../DragItem"

// Defining Action type
export type Action = 
    | {type: "ADD_LIST", payload: string}
    | {type: "ADD_TASK", payload: { text: string; listId: string }}
    | {type: "MOVE_LIST", payload: {draggedID: string, hoverID: string}}
    | {type: "SET_DRAGGED_ITEM", payload: DragItem | null}


    
// Action creators    
export const addList = (text: string): Action => ({
    type: "ADD_LIST",
    payload: text
})

export const addTask = (text: string, listId: string): Action => ({
    type: "ADD_TASK",
    payload: {
        text,
        listId
    }
})

export const moveList = (draggedID: string, hoverID: string): Action => ({
    type: "MOVE_LIST", 
    payload: {
        draggedID,
        hoverID
    }
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
})