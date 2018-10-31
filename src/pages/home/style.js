import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
	z-index: -1;
`;

export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left;
	.banner_img{
		width: 625px;
		height: 270px;
		display: block;
		overflow: hidden;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	padding-right: 10px;
	font-size: 14px;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	background: #f7f7f7;
	margin-left: 18px; 
	margin-bottom: 15px;
	.topic_pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const TopicMore = styled.a`
	display: inline-block;
	color: #787878;
	margin-left: 18px;
	margin-top: 9px;
	cursor: pointer;
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;


export const RecommendCode = styled.div`
	overflow: hidden;
	margin-bottom: 30px;
	padding: 10px 22px;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	box-sizing: border-box;
	cursor: pointer;
`;

export const RecommendCodeImg = styled.img`
	display: block;
	float: left;
	width: 60px;
	height: 60px;
	opacity: .85;
`;

export const RecommendCodeInfo = styled.div`
	display: inline-block;
	margin-left: 15px;
	margin-top: 8px;
	vertical-align: middle;
`;

export const RecommendTitle = styled.div`
	line-height: 21px;
	font-size: 15px;
	color: #333;
`;

export const RecommendDesc = styled.div`
	line-height: 18px;
	margin-top: 4px;
	font-size: 13px;
	color: #999;
`;

export const LoadMore = styled.div`
	width: 100%；
	height: 40px;
	margin: 30px 0;
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const WriterWrapper = styled.div`
	width: 100%;
	height: 300px;
`;

export const WriterList = styled.ul`
	margin: 0 0 20px;
	text-align: left;
	list-style: none;
	color: #ccc;
`;

export const WriterItem = styled.li`
	overflow: hidden;
	margin-top: 15px;
	line-height: 20px;
`;

export const Avatar = styled.a`
	display: block;
	float: left;
	width: 48px;
	height: 48px;
	margin-right: 10px;
	cursor: pointer;
	img {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		border: 1px solid #ddd;
		border-radius: 50%;
	}
`;

export const Follow = styled.a`
	float: right;
	font-size: 13px;
	color: #42c02e;
	margin-top: 5px;
`;

export const WriterName = styled.a`
	padding-top: 5px;
	margin-right: 60px;
	font-size: 14px;
	display: block;
	color: #333;
`;

export const WriterDesc = styled.p`
	margin-top: 2px;
	font-size: 12px;
	color: #969696;
`;

export const WriterMore = styled.div`
	width: 100%;
	padding: 7px 7px 7px 12px;
	font-size: 13px;
	color: #787878;
	background-color: #f7f7f7;
	border:1px solid #dcdcdc;
	border-radius: 4px;
	box-sizing: border-box;
	text-align: center;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	text-aligh: center;
	border: 1px solid #ccc;
	font-size: 14px;
`;