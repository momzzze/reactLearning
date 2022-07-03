class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing Two', 'Thing three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>);
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>);
    }
}
class Action extends React.Component {
    render() {
        return (
            <button>What should I do?</button>
        );
    }
}
class Options extends React.Component {
    render() {

        return (
            <div>
                <p>{this.props.options.length}</p>
                {/* {this.props.options.map((o)=><p key={o}>{o}</p>)} */}

                {this.props.options.map((o) => {
                   return <Option key={o} option={o} />
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        );
    }
}


class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));