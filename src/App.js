import React, { useState, useMemo, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Route, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { AppTopbar } from './AppTopbar'
import { AppFooter } from './AppFooter'
import { AppMenu } from './AppMenu'
import { AppConfig } from './AppConfig'

import Dashboard from './components/Dashboard'
import ButtonDemo from './components/ButtonDemo'
import ChartDemo from './components/ChartDemo'
import Documentation from './components/Documentation'
import FileDemo from './components/FileDemo'
import FloatLabelDemo from './components/FloatLabelDemo'
import FormLayoutDemo from './components/FormLayoutDemo'
import InputDemo from './components/InputDemo'
import ListDemo from './components/ListDemo'
import MenuDemo from './components/MenuDemo'
import MessagesDemo from './components/MessagesDemo'
import MiscDemo from './components/MiscDemo'
import OverlayDemo from './components/OverlayDemo'
import MediaDemo from './components/MediaDemo'
import PanelDemo from './components/PanelDemo'
import TableDemo from './components/TableDemo'
import TreeDemo from './components/TreeDemo'
import InvalidStateDemo from './components/InvalidStateDemo'

import Crud from './pages/Crud'
import EmptyPage from './pages/EmptyPage'
import TimelineDemo from './pages/TimelineDemo'
import CrudDoctors from './pages/CrudDoctors'
import CrudProducts from './pages/CrudProducts'
import Login from './pages/Login'

import PrivateRoute from './Routes/PrivateRoute'
import { useRecoilValue } from 'recoil';

import { authAtom } from './States/Atoms/auth';
import { useUserActions } from './Actions/users.actions';

import PrimeReact from 'primereact/api'
import { Tooltip } from 'primereact/tooltip'

import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/tailwind-light/theme.css'
//import './assets/demo/flags/flags.css'
//import './assets/demo/Demos.scss'
import './assets/layout/layout.scss'
//import './styles/tailwind.css'
import './App.scss'
import CrudStaffs from './pages/CrudStaffs'


const { app } = window.require('@electron/remote')

function App() {
  const [layoutMode, setLayoutMode] = useState('static')
  const [layoutColorMode, setLayoutColorMode] = useState('dark')
  const [inputStyle, setInputStyle] = useState('outlined')
  const [ripple, setRipple] = useState(true)
  const [staticMenuInactive, setStaticMenuInactive] = useState(false)
  const [overlayMenuActive, setOverlayMenuActive] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false)
  const copyTooltipRef = useRef()
  const location = useLocation()
  const userActions = useUserActions();

  const auth = useRecoilValue(authAtom);

  PrimeReact.ripple = true

  let menuClick = false
  let mobileTopbarMenuClick = false

  useEffect(() => {
    if (mobileMenuActive) {
      addClass(document.body, 'body-overflow-hidden')
    } else {
      removeClass(document.body, 'body-overflow-hidden')
    }
  }, [mobileMenuActive])

  useEffect(() => {
    copyTooltipRef &&
      copyTooltipRef.current &&
      copyTooltipRef.current.updateTargetEvents()
  }, [location])

  const onInputStyleChange = inputStyle => {
    setInputStyle(inputStyle)
  }

  const onRipple = e => {
    PrimeReact.ripple = e.value
    setRipple(e.value)
  }

  const onLayoutModeChange = mode => {
    setLayoutMode(mode)
  }

  const onColorModeChange = mode => {
    setLayoutColorMode(mode)
  }

  const onWrapperClick = event => {
    if (!menuClick) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }

    if (!mobileTopbarMenuClick) {
      setMobileTopbarMenuActive(false)
    }

    mobileTopbarMenuClick = false
    menuClick = false
  }

  const onToggleMenuClick = event => {
    menuClick = true

    if (isDesktop()) {
      if (layoutMode === 'overlay') {
        if (mobileMenuActive === true) {
          setOverlayMenuActive(true)
        }

        setOverlayMenuActive(prevState => !prevState)
        setMobileMenuActive(false)
      } else if (layoutMode === 'static') {
        setStaticMenuInactive(prevState => !prevState)
      }
    } else {
      setMobileMenuActive(prevState => !prevState)
    }

    event.preventDefault()
  }

  const onSidebarClick = () => {
    menuClick = true
  }

  const onMobileTopbarMenuClick = event => {
    mobileTopbarMenuClick = true

    setMobileTopbarMenuActive(prevState => !prevState)
    event.preventDefault()
  }

  const onMobileSubTopbarMenuClick = event => {
    mobileTopbarMenuClick = true

    event.preventDefault()
  }

  const onMenuItemClick = event => {
    if (!event.item.items) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }
  }
  const isDesktop = () => {
    return window.innerWidth >= 992
  }

  const menu = [
    {
      label: 'Home',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-home',
          to: '/'
        }
      ]
    },
    {
      label: 'Main',
      icon: 'pi pi-fw pi-search',
      items: [
        {
          label: 'Staff',
          icon: 'pi pi-fw pi-users',
          to: '/staff',
          items: [
            {
              label: 'View Staf'
            },
            {
              label: 'Add Staff'
            },

            {
              label: 'Edit Staff'
            }
          ]
        },
        {
          label: 'Pharmacie',
          icon: 'pi pi-fw pi-briefcase',
          to: '/Pharmacie',
          items: [
            {
              label: 'All Pharmacie'
            },
            {
              label: 'Add Pharmacie'
            },

            {
              label: 'Edit Pharmacie'
            },

            {
              label: 'Profile Doctor'
            }
          ]
        },
        {
          label: 'Comptabilité',
          icon: 'pi pi-fw pi-book',
          to: '/Comptabilité',
          items: [
            {
              label: 'All Comptabilité'
            },
            {
              label: 'Add Comptabilité'
            },

            {
              label: 'Edit Comptabilité'
            }
          ]
        },
        {
          label: 'Maternité',
          icon: 'pi pi-fw pi-user-edit',
          to: '/Maternité',
          items: [
            {
              label: 'All Maternité'
            },
            {
              label: 'Add Maternité'
            },

            {
              label: 'Edit Maternité'
            }
          ]
        },
        {
          label: 'Dossier Médical',
          icon: 'pi pi-fw pi-book',
          to: '/Dossier',
          items: [
            {
              label: 'All Dossier Médical'
            },
            {
              label: 'Add Dossier Médical'
            },

            {
              label: 'Edit Dossier Médical'
            }
          ]
        },
        {
          label: 'Imagerie Médical',
          icon: 'pi pi-fw pi-briefcase',
          to: '/Imagerie',
          items: [
            {
              label: 'All Imagerie Médical'
            },
            {
              label: 'Add Imagerie Médical'
            }
          ]
        },
        {
          label: 'PMA',
          icon: 'pi pi-fw pi-building',
          to: '/PMA',
        },
        {
          label: 'Consultation',
          icon: 'pi pi-fw pi-database',
          to: '/Consultation',
          items: [
            {
              label: 'Consultation'
            },
            {
              label: 'Issued Consultation'
            }
          ]
        },
        {
          label: 'Stock',
          icon: 'pi pi-fw pi-server',
          to: '/Stock',
          items: [
            {
              label: 'Stock'
            },
            {
              label: 'Issued Stock'
            }
          ]
        }
      ]
    }
  ]

  const addClass = (element, className) => {
    if (element.classList) element.classList.add(className)
    else element.className += ' ' + className
  }

  const removeClass = (element, className) => {
    if (element.classList) element.classList.remove(className)
    else
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      )
  }

  const wrapperClass = classNames('layout-wrapper', {
    'layout-overlay': layoutMode === 'overlay',
    'layout-static': layoutMode === 'static',
    'layout-static-sidebar-inactive':
      staticMenuInactive && layoutMode === 'static',
    'layout-overlay-sidebar-active':
      overlayMenuActive && layoutMode === 'overlay',
    'layout-mobile-sidebar-active': mobileMenuActive,
    'p-input-filled': inputStyle === 'filled',
    'p-ripple-disabled': ripple === false,
    'layout-theme-light': layoutColorMode === 'light'
  })

  if (!auth) return <Login/>;

  if (location.pathname === "/") return <PrivateRoute path="/" component={Dashboard}/>

  return (
    <div className={wrapperClass} onClick={onWrapperClick}>
     
    <Tooltip
      ref={copyTooltipRef}
      target=".block-action-copy"
      position="bottom"
      content="Copied to clipboard"
      event="focus"
    />

    <AppTopbar
      onToggleMenuClick={onToggleMenuClick}
      layoutColorMode={layoutColorMode}
      mobileTopbarMenuActive={mobileTopbarMenuActive}
      onMobileTopbarMenuClick={onMobileTopbarMenuClick}
      onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick}
    />

    <div className="layout-sidebar" onClick={onSidebarClick}>
      <AppMenu
        model={menu}
        onMenuItemClick={onMenuItemClick}
        layoutColorMode={layoutColorMode}
      />
    </div>

    <div className="layout-main-container">
      <div className="layout-main">
      

        <PrivateRoute path="/formlayout" component={FormLayoutDemo} />
        <PrivateRoute path="/input" component={InputDemo} />
        <PrivateRoute path="/floatlabel" component={FloatLabelDemo} />
        <PrivateRoute path="/invalidstate" component={InvalidStateDemo} />
        <PrivateRoute path="/button" component={ButtonDemo} />
        <PrivateRoute path="/table" component={TableDemo} />
        <PrivateRoute path="/list" component={ListDemo} />
        <PrivateRoute path="/tree" component={TreeDemo} />
        <PrivateRoute path="/panel" component={PanelDemo} />
        <PrivateRoute path="/overlay" component={OverlayDemo} />
        <PrivateRoute path="/media" component={MediaDemo} />
        <PrivateRoute path="/menu" component={MenuDemo} />
        <PrivateRoute path="/messages" component={MessagesDemo} />
        <PrivateRoute path="/doctors" component={CrudDoctors} />
        <PrivateRoute path="/pharmacy" component={CrudProducts} />

        <PrivateRoute path="/file" component={FileDemo} />
        <PrivateRoute
          path="/chart"
          render={() => (
            <ChartDemo colorMode={layoutColorMode} location={location} />
          )}
        />
        <PrivateRoute path="/misc" component={MiscDemo} />
        <PrivateRoute path="/timeline" component={TimelineDemo} />
        <PrivateRoute path="/crud" component={Crud} />
        <PrivateRoute path="/staff" component={CrudStaffs} />
        <PrivateRoute path="/empty" component={EmptyPage} />
        <PrivateRoute path="/documentation" component={Documentation} />
      </div>

      <AppFooter layoutColorMode={layoutColorMode} />
    </div>

    <AppConfig
      rippleEffect={ripple}
      onRippleEffect={onRipple}
      inputStyle={inputStyle}
      onInputStyleChange={onInputStyleChange}
      layoutMode={layoutMode}
      onLayoutModeChange={onLayoutModeChange}
      layoutColorMode={layoutColorMode}
      onColorModeChange={onColorModeChange}
    />

    <CSSTransition
      classNames="layout-mask"
      timeout={{ enter: 200, exit: 200 }}
      in={mobileMenuActive}
      unmountOnExit
    >
      <div className="layout-mask p-component-overlay"></div>
    </CSSTransition>
  </div>
  )
}

export default App;
