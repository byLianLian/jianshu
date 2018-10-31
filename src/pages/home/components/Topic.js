import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	TopWrapper,
	TopicItem,
	TopicMore 
}from '../style';

class Topic extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<TopWrapper>
				{
					list.map((item) => (
						<TopicItem key={item.get('id')}>
							<img className='topic_pic' src={item.get('imgUrl')} alt='' />
							{item.get('title')}
						</TopicItem>
					))
				}
				<TopicMore>更多热门专题></TopicMore>
			</TopWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);