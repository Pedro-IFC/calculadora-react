import React, { Component } from "react";
import './calculator.css';

import Button from '../subcomponentes/botao.jsx';
import Display from '../subcomponentes/display.jsx';

const initialState = {
    displayValue:'0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0

};
class Calculator extends Component{
    
    state = {...initialState}

    constructor(props){
        super();
        this.clearMemory = this.clearMemory.bind(this);
        this.doOperation = this.doOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory(){
        this.setState({...initialState});
    }
    doOperation(operation){
        if(this.state.current===0){
            this.setState({operation, current:1, clearDisplay:true})
        }else{
            const equals = operation==='=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values];
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`); 
            values[1] = 0;
            this.setState({
                displayValue: values[0].toString(),
                operation: equals ? null : operation,
                current: equals? 0: 1,
                clearDisplay: equals,
                values
            });
        }
    }
    addDigit(digit){
        if(digit==='.' && this.state.displayValue.includes('.')){
            return ;
        }
        
        const clearDisplay= this.state.displayValue==='0' || this.state.clearDisplay;

        const currentValue = clearDisplay ?  '': this.state.displayValue;

        if(digit==='.' && currentValue==="0"){
            digit="0.";
        }

        const displayValue = currentValue + digit;
        
        this.setState({displayValue, clearDisplay: false});

        if(digit !== '.'){
            var current = this.state.current;
            const newValue = displayValue;
            const values = [...this.state.values];
            values[current] = newValue!=="" ? parseFloat(newValue): 0;
            this.setState({current, values});
        }
    }
    render() {
        return <>
            <div className="Calculadora">
                <Display value={this.state.displayValue}></Display>
                <Button className="twocol" label={'AC'} click={this.clearMemory}></Button>
                <Button className="operation" label={'/'} click={this.doOperation}></Button>
                <Button className="operation" label={''} click={this.addDigit}></Button>
                <Button label={'7'} click={this.addDigit}></Button>
                <Button label={'8'} click={this.addDigit}></Button>
                <Button label={'9'} click={this.addDigit}></Button>
                <Button className="operation" label={'*'} click={this.doOperation}></Button>
                <Button label={'4'} click={this.addDigit}></Button>
                <Button label={'5'} click={this.addDigit}></Button>
                <Button label={'6'} click={this.addDigit}></Button>
                <Button className="operation" label={'-'} click={this.doOperation}></Button>
                <Button label={'1'} click={this.addDigit}></Button>
                <Button label={'2'} click={this.addDigit}></Button>
                <Button label={'3'} click={this.addDigit}></Button>
                <Button className="operation" label={'+'} click={this.doOperation}></Button>
                <Button className="twocol" label={'0'} click={this.addDigit}></Button>
                <Button label={'.'} click={this.addDigit}></Button>
                <Button className="operation" label={'='} click={this.doOperation}></Button>
            </div>
        </>
    }
}

export default Calculator;