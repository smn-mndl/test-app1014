/** Context wrapper that will maintain the application state and is single source of data */

import React, { Component } from 'react'
import {ContextDataModel} from "./PA-ContextDataModel";
import { clone , keys , each } from 'lodash'

export const PAContext = React.createContext();
export const PAProvider = PAContext.Provider;

class PAContextProvider extends Component {
    constructor(props){
        super(props);
        // console.log("dsfsdf",ContextDataModel)
        this.state = {
            appDataModel : ContextDataModel,
            updateState: {}
        }
    }

    updateState = (updatedState) => {
        /** Update the apt data model in the current state from the updatedStateObj */
        this.localAppDataModel = clone(this.state.appDataModel);
        each(keys(updatedState),(updatedDataItemKey)=>{
            if(keys(this.state.appDataModel).includes(updatedDataItemKey)){
                this.localAppDataModel[updatedDataItemKey] = updatedState[updatedDataItemKey]
            }
        })
        this.setState({
            appDataModel: this.localAppDataModel
        })
    }
    render() {
        return (
            <PAProvider value = {{state:this.state, updateState:this.updateState}}>
                {this.props.children}
            </PAProvider>
        )
    }
}

export default PAContextProvider;