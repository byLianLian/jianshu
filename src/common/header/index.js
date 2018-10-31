import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
	HeaderWrapperOut,
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	NavSearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem
} from './style';



class Header extends Component {
	getListArea = () => {
		const { focused, mouseIn, list, page, totalPage, last, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const jsList = list.toJS();
		const pageList = [];
		if(jsList.length) {
			if(page < totalPage) {
				for(let i=(page-1)*10; i < page*10; i++) {
					pageList.push(
						<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
					)
				}
			}else{
				for(let i=(page-1)*10; i < (page-1)*10+last; i++) {
					pageList.push(
						<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
					)
				}
			}
			
		}
		
		if(focused || mouseIn) {
			return(
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
							<i ref={(icon) => {this.spinIcon=icon}} className='iconfont spin'>&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}
	render() {
		const { focused, list, handleInputFocus, handleInputBlur, login, logOut} = this.props;
		return (
			<HeaderWrapperOut>
				<HeaderWrapper>
					<Link to='/'>
						<Logo />
					</Link>
					<Nav>
						<Link to='/'>
							<NavItem className='left active'>首页</NavItem>
						</Link>
						<NavItem className='left'>下载App</NavItem>
						{
							login ? 
							<NavItem  onClick={logOut} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
						}
						<NavItem className='right'><i className="iconfont">&#xe602;</i></NavItem>
						<NavSearchWrapper>
							<CSSTransition
								in={focused}
					            timeout={200}
					            classNames="slide"
							>
								<NavSearch
									className={focused ? 'focused' : ''}
									onFocus={() => handleInputFocus(list)}
									onBlur={handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
							&#xe610;
							</i>
							{this.getListArea()}
						</NavSearchWrapper>
					</Nav>
					<Addition>
						<Link to='/write'>
							<Button className='writting'><i className="iconfont">&#xe703;</i>
								写文章
							</Button>
						</Link>
						<Button>注册</Button>
					</Addition>
				</HeaderWrapper>
			</HeaderWrapperOut>
		)
	}

	
}


const mapStateToProps = (state) => ({
	focused: state.getIn(['header', 'focused']),
	list: state.getIn(['header', 'list']),
	page: state.getIn(['header', 'page']),
	mouseIn: state.getIn(['header', 'mouseIn']),
	totalPage: state.getIn(['header', 'totalPage']),
	last: state.getIn(['header', 'last']),
	login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
	handleInputFocus(list){
		(list.size === 0) && dispatch(actionCreators.getList());	
		dispatch(actionCreators.searchFoucs());
	},
	handleInputBlur() {
		dispatch(actionCreators.searchBlur());
	},
	handleMouseEnter() {
		dispatch(actionCreators.mouseEnter());
	},
	handleMouseLeave() {
		dispatch(actionCreators.mouseLeave());
	},
	handleChangePage(page, totalPage, spin) {
		let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
		if(originAngle) {
			originAngle = parseInt(originAngle, 10);
		}else {
			originAngle = 0;
		}
		spin.style.transform = 'rotate(' +  (originAngle + 360) +'deg)';

		if(page < totalPage) {
			dispatch(actionCreators.changePage(page+1));
		}else{
			dispatch(actionCreators.changePage(1));
		}
	},
	logOut() {
		dispatch(loginActionCreators.logOut());
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);