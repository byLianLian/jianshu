import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {Link} from 'react-router-dom';
import {
	WriterWrapper,
	WriterList,
	WriterItem,
	Avatar,
	Follow,
	WriterName,
	WriterDesc,
	WriterMore
} from '../style';

class Writer extends PureComponent {
	render() {
		return (
			<WriterWrapper>
				<WriterList>
					{
						this.props.list.map((item, index) => {
							return(
								<WriterItem key={index}>
									<Avatar>
										<img src={item.get('imgUrl')} alt='' />
									</Avatar>
									<Follow>关注</Follow>
									<WriterName>{item.get('name')}</WriterName>
									<WriterDesc>{item.get('desc')}</WriterDesc>
								</WriterItem>
							)
						})
					}
				</WriterList>
				<Link to='/recommendwriter'>
					<WriterMore>查看更多</WriterMore>
				</Link>
			</WriterWrapper>
		)
	}
	componentDidMount() {
		this.props.getWriterList();
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'WriterList'])
})

const mapDispatchToProps = (dispatch) => ({
	getWriterList() {
		dispatch(actionCreators.getWriterList())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer);