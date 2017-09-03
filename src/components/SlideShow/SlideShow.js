import React, { Component, Children } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './SlideShow.css';

class SlideShow extends Component {
    state = {
        total: 0,
        current: 0,
    }

    componentDidMount() {
        const { children } = this.props;
        this.setState({ total: Children.count(children) });
        this.interval = setInterval(this.showNext, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showNext = () => {
        const { total, current } = this.state;
        this.setState({
            current: current + 1 === total ? 0 : current + 1
        });
    };

    render() {
        const { children } = this.props;
        return (
                <div>
                <ReactCSSTransitionGroup
                    className="group"
                    transitionName="example"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}
                >
                    {Children.toArray(children)[this.state.current]}
                </ReactCSSTransitionGroup>
                </div>

        )
    }
}

export default SlideShow;