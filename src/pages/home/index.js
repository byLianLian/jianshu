import React, { PureComponent } from 'react';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import slider from '../../static/slider.jpg';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
}from './style';

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt='' className='banner_img' src={slider} />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop.bind(this)}>回到顶部</BackTop> : null}				
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData()
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}

}

const mapStateToProps = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
	changeHomeData(action) {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if(document.documentElement.scrollTop > 400){
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);