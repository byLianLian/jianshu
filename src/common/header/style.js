import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapperOut = styled.div`
	height: 56px;
	background-color: #fff;
	border-bottom: 1px solid #f0f0f0;
	z-index: 1;
`;

export const HeaderWrapper = styled.div`
	height: 56px;
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 56px; 
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const NavSearchWrapper = styled.div`
	float: left;
	position: relative;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	font-size: 14px;
	background: #eee;
	outline: none;
	border-radius: 40px;
	padding: 0 30px 0 20px;
	border: 1px solid #eee;
	margin: 9px 0 0 20px;
	box-sizing: border-box;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 20px;
	top: 57px;
	width: 250px;
	padding: 20px 20px 10px;
	border-bottom: 1px solid #f0f0f0;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.span`
	margin-bottom: 10px;
	height: 20px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	color: #969696;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all 0.2s ease-in;
		transform: center center;
	}
`;

export const SearchInfoList = styled.div`
	margin-top: 5px;
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	font-size: 12px;
	padding: 2px 6px;
	border: 1px solid #ddd;
	color: #787878;
	margin: 0px 10px 9px 0;
	border-radius: 3px;
	display:inline-block;
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	overflow: hidden;
`;
export const Button = styled.button`
	float: right;
	width: 79px;
	height: 38px;
	line-height: 24px;
	border-radius: 20px;
	margin: 9px 5px 0 15px;
	border: 1px solid rgba(236,97,73,.7);
	font-size: 15px;
	color: #ea6f5a;
	background-color: transparent;
	&.writting {
		color: #fff;
		background: #ea6f5a;
	}
`;
