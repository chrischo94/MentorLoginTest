import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='CoachingInfo' onClick={toggle}>
                    코칭
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>
                    멘토링
                </SidebarLink>
                <SidebarLink to='services' onClick={toggle}>
                    리더십
                </SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>
                    은퇴
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>
                    회원가입 / 로그인
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    );
};

export default Sidebar;
