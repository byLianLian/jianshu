import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect} from 'react-redux';
import { WriteWrapper } from './style';

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if(loginStatus) {
			return <WriteWrapper>写文章界面</WriteWrapper>
		}else {
			return <Redirect to='/login' />
		}
		
	}

	componentDidMount() {
		
	}
}
const mapStateToProps = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
	
})

export default connect(mapStateToProps, mapDispatchToProps)(Write);