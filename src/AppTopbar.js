import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useUserActions } from './Actions/users.actions';

export const AppTopbar = (props) => {
    const userActions = useUserActions();

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <span>Clinique Akhrouf</span>
            </Link>

            <button type="button" className="p-link  !bg-spacecadet layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

                <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                            <i className="pi pi-calendar"/>
                            <span>Events</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                            <i className="pi pi-cog"/>
                            <span>Settings</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                            <i className="pi pi-user"/>
                            <span>Profile</span>
                        </button>
                    </li>
                       <li>
                        <button className="p-link layout-topbar-button" onClick={()=>userActions.logout()}>
                            <i className="pi pi-sign-out"/>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
        </div>
    );
}
