import React, { useState, useMemo, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Route, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { AppTopbar } from './AppTopbar'
import { AppFooter } from './AppFooter'
import { AppMenu } from './AppMenu'
import { AppConfig } from './AppConfig'

import Dashboard from './components/Dashboard'
import CrudStaffs from './pages/CrudStaffs'
import CrudProducts from './pages/CrudProducts'

import Login from './pages/Login'

import PrivateRoute from './Routes/PrivateRoute'
import { useRecoilValue } from 'recoil'

import { authAtom } from './States/Atoms/auth'
import { useUserActions } from './Actions/users.actions'

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
  const userActions = useUserActions()

  const auth = useRecoilValue(authAtom)

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
          to: '/pharmacy',
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
          disabled: true,
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
          disabled: true,
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
          disabled: true,
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
          disabled: true,
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
          disabled: true
        },
        {
          label: 'Consultation',
          icon: 'pi pi-fw pi-database',
          to: '/Consultation',
          disabled: true,
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
          disabled: true,
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

  if (!auth)
    return (
      <div className="layout-main-container backg">
        <div className="layout-main">
          <Login />
        </div>
      </div>
    )

  if (location.pathname === '/')
    return (
      <div className="layout-main-container backg">
        <div className="layout-main">
          <PrivateRoute path="/" component={Dashboard} />
        </div>
      </div>
    )

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

      <div className="layout-main-container backg">
        <div className="layout-main">
          <PrivateRoute path="/staff" component={CrudStaffs} />
          <PrivateRoute path="/pharmacy" component={CrudProducts} />
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

export default App
