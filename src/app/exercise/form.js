import React from 'react';

function SimpleForm(props) {
    return (
        <div>
            <form>
                <label>
                    名字:<input type="text" name="name" />
                </label>
                <input type="submit" value="提交" />
            </form>
        </div>
    )
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value.toUpperCase()
        });
    }

    handleSubmit(event) {
        alert(`提交的名字: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    文章:
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['coconut', 'mango']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert(`喜欢的风味是: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味:
                    <select multiple={true} onChange={this.handleChange} value={this.state.value}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">柠檬</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

class Reservation extends React.Component {
    _defaultValue = 'hi';
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    参与:
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    参与人数:
                    <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
                <label>
                    受控输入空值:
                    <input type="text" value={this._defaultValue} onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
}

export { SimpleForm, NameForm, FlavorForm, Reservation };