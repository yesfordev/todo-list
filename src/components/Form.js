import React, {Component} from 'react';

class Form extends Component {
    state = {
        deadline:'',
        todo: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            deadline: '',
            todo: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.deadline}
                    placeholder="deadline"
                    name="deadline"
                    onChange={this.handleChange}
                />
                <input 
                    value={this.state.todo}
                    placeholder="todo"
                    name="todo"
                    onChange={this.handleChange}
                />
                <button type="submit">할 일 추가</button>
            </form>

        );
    }
}

export default Form;