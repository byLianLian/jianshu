import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	RecommendWrapper,
	RecommendItem,
	RecommendCode,
	RecommendCodeImg,
	RecommendCodeInfo,
	RecommendTitle,
	RecommendDesc
} from '../style';

class Recommend extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<div>
				<RecommendWrapper>
					{
						list.map((item) => {
							return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
						})
					}
				</RecommendWrapper>
				<RecommendCode>
					<RecommendCodeImg src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
					<RecommendCodeInfo>
						<RecommendTitle>下载简书手机App</RecommendTitle>
						<RecommendDesc>随时随地发现和创作内容</RecommendDesc>
					</RecommendCodeInfo>
				</RecommendCode>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps, null)(Recommend);