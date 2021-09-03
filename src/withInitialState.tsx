import { useState, useState, ComponentType } from "react"
import { AppState } from "./state/appStateReducer"


type InjectedProps = {
    initialState: AppState
}

export function withInitalState<TProps>(WrappedComponent: ComponentType<TProps & InjectedProps>)   {
    return (props: Omit<TProps, keyof InjectedProps>) => {
        const [initialState, setInitalState] = useState<AppState>({
            lists: [],
            draggedItem: null
        })


        return (
            <WrappedComponent
                {...props as TProps}
                initialState={initialState}
            />
        )




    }

}