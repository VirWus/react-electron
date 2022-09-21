import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'classnames'
import { icon } from '@fortawesome/fontawesome-svg-core'

import { pharmacy } from './Icons/pharmacy';

const Dashboard = props => {
  useEffect(() => {}, [])
  const menu = [
    {
      label: 'Staff',
      imgUrl:
        'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      to: '/staff',
      icon: pharmacy,
    },
    {
      label: 'Pharmacie',
      imgUrl:
        'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      to: '/pharmacy',
      icon: (
        <svg
          width="71px"
          height="76px"
          viewBox="29 14 71 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Group"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            transform="translate(30.000000, 14.000000)"
          >
            <g id="Group-8" fill="#D98A19">
              <g id="Group-7">
                <g id="Group-6">
                  <path
                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group-20"
              transform="translate(0.000000, 14.114286)"
              stroke="#FFFFFF"
              stroke-linecap="square"
            >
              <path
                d="M0.419998734,54.9642857 L4.70316223,54.9642857"
                id="Line"
              ></path>
              <path
                d="M0.419998734,50.4404762 L4.70316223,50.4404762"
                id="Line"
              ></path>
              <path
                d="M0.419998734,45.9166667 L4.70316223,45.9166667"
                id="Line"
              ></path>
              <path
                d="M0.419998734,41.3928571 L2.93999114,41.3928571"
                id="Line"
              ></path>
              <path
                d="M0.419998734,36.8690476 L4.70316223,36.8690476"
                id="Line"
              ></path>
              <path
                d="M0.419998734,32.3452381 L4.70316223,32.3452381"
                id="Line"
              ></path>
              <path
                d="M0.419998734,27.8214286 L4.70316223,27.8214286"
                id="Line"
              ></path>
              <path
                d="M0.419998734,23.297619 L2.93999114,23.297619"
                id="Line"
              ></path>
              <path
                d="M0.419998734,18.7738095 L4.70316223,18.7738095"
                id="Line"
              ></path>
              <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
              <path
                d="M0.419998734,9.72619048 L4.70316223,9.72619048"
                id="Line"
              ></path>
              <path
                d="M0.419998734,5.20238095 L2.93999114,5.20238095"
                id="Line"
              ></path>
              <path
                d="M0.419998734,0.678571429 L4.70316223,0.678571429"
                id="Line"
              ></path>
            </g>
          </g>
        </svg>
      )
    },
    {
      label: 'Comptabilité',
      imgUrl:
        'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      to: '/Comptabilité',
      disabled: true,
      icon: (
        <svg
          width="71px"
          height="76px"
          viewBox="29 14 71 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Group"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            transform="translate(30.000000, 14.000000)"
          >
            <g id="Group-8" fill="#D98A19">
              <g id="Group-7">
                <g id="Group-6">
                  <path
                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group-20"
              transform="translate(0.000000, 14.114286)"
              stroke="#FFFFFF"
              stroke-linecap="square"
            >
              <path
                d="M0.419998734,54.9642857 L4.70316223,54.9642857"
                id="Line"
              ></path>
              <path
                d="M0.419998734,50.4404762 L4.70316223,50.4404762"
                id="Line"
              ></path>
              <path
                d="M0.419998734,45.9166667 L4.70316223,45.9166667"
                id="Line"
              ></path>
              <path
                d="M0.419998734,41.3928571 L2.93999114,41.3928571"
                id="Line"
              ></path>
              <path
                d="M0.419998734,36.8690476 L4.70316223,36.8690476"
                id="Line"
              ></path>
              <path
                d="M0.419998734,32.3452381 L4.70316223,32.3452381"
                id="Line"
              ></path>
              <path
                d="M0.419998734,27.8214286 L4.70316223,27.8214286"
                id="Line"
              ></path>
              <path
                d="M0.419998734,23.297619 L2.93999114,23.297619"
                id="Line"
              ></path>
              <path
                d="M0.419998734,18.7738095 L4.70316223,18.7738095"
                id="Line"
              ></path>
              <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
              <path
                d="M0.419998734,9.72619048 L4.70316223,9.72619048"
                id="Line"
              ></path>
              <path
                d="M0.419998734,5.20238095 L2.93999114,5.20238095"
                id="Line"
              ></path>
              <path
                d="M0.419998734,0.678571429 L4.70316223,0.678571429"
                id="Line"
              ></path>
            </g>
          </g>
        </svg>
      )
    },
    {
      label: 'Maternite',
      imgUrl:
        'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      to: '/Maternité',
      disabled: true,
      icon: (
        <svg
          width="71px"
          height="76px"
          viewBox="29 14 71 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Group"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            transform="translate(30.000000, 14.000000)"
          >
            <g id="Group-8" fill="#D98A19">
              <g id="Group-7">
                <g id="Group-6">
                  <path
                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group-20"
              transform="translate(0.000000, 14.114286)"
              stroke="#FFFFFF"
              stroke-linecap="square"
            >
              <path
                d="M0.419998734,54.9642857 L4.70316223,54.9642857"
                id="Line"
              ></path>
              <path
                d="M0.419998734,50.4404762 L4.70316223,50.4404762"
                id="Line"
              ></path>
              <path
                d="M0.419998734,45.9166667 L4.70316223,45.9166667"
                id="Line"
              ></path>
              <path
                d="M0.419998734,41.3928571 L2.93999114,41.3928571"
                id="Line"
              ></path>
              <path
                d="M0.419998734,36.8690476 L4.70316223,36.8690476"
                id="Line"
              ></path>
              <path
                d="M0.419998734,32.3452381 L4.70316223,32.3452381"
                id="Line"
              ></path>
              <path
                d="M0.419998734,27.8214286 L4.70316223,27.8214286"
                id="Line"
              ></path>
              <path
                d="M0.419998734,23.297619 L2.93999114,23.297619"
                id="Line"
              ></path>
              <path
                d="M0.419998734,18.7738095 L4.70316223,18.7738095"
                id="Line"
              ></path>
              <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
              <path
                d="M0.419998734,9.72619048 L4.70316223,9.72619048"
                id="Line"
              ></path>
              <path
                d="M0.419998734,5.20238095 L2.93999114,5.20238095"
                id="Line"
              ></path>
              <path
                d="M0.419998734,0.678571429 L4.70316223,0.678571429"
                id="Line"
              ></path>
            </g>
          </g>
        </svg>
      )
    },
    {
      label: 'Dossiers',
      imgUrl:
        'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      to: '/Dossier',
      disabled: true
    },
    {
      label: 'Imagerie',
      imgUrl: 'pi pi-fw pi-briefcase',
      to: '/Imagerie',
      disabled: true,
      icon: (
        <svg
          width="71px"
          height="76px"
          viewBox="29 14 71 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Group"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            transform="translate(30.000000, 14.000000)"
          >
            <g id="Group-8" fill="#D98A19">
              <g id="Group-7">
                <g id="Group-6">
                  <path
                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group-20"
              transform="translate(0.000000, 14.114286)"
              stroke="#FFFFFF"
              stroke-linecap="square"
            >
              <path
                d="M0.419998734,54.9642857 L4.70316223,54.9642857"
                id="Line"
              ></path>
              <path
                d="M0.419998734,50.4404762 L4.70316223,50.4404762"
                id="Line"
              ></path>
              <path
                d="M0.419998734,45.9166667 L4.70316223,45.9166667"
                id="Line"
              ></path>
              <path
                d="M0.419998734,41.3928571 L2.93999114,41.3928571"
                id="Line"
              ></path>
              <path
                d="M0.419998734,36.8690476 L4.70316223,36.8690476"
                id="Line"
              ></path>
              <path
                d="M0.419998734,32.3452381 L4.70316223,32.3452381"
                id="Line"
              ></path>
              <path
                d="M0.419998734,27.8214286 L4.70316223,27.8214286"
                id="Line"
              ></path>
              <path
                d="M0.419998734,23.297619 L2.93999114,23.297619"
                id="Line"
              ></path>
              <path
                d="M0.419998734,18.7738095 L4.70316223,18.7738095"
                id="Line"
              ></path>
              <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
              <path
                d="M0.419998734,9.72619048 L4.70316223,9.72619048"
                id="Line"
              ></path>
              <path
                d="M0.419998734,5.20238095 L2.93999114,5.20238095"
                id="Line"
              ></path>
              <path
                d="M0.419998734,0.678571429 L4.70316223,0.678571429"
                id="Line"
              ></path>
            </g>
          </g>
        </svg>
      )
    },
    {
      label: 'PMA',
      imgUrl: 'pi pi-fw pi-building',
      to: '/PMA',
      disabled: true,  icon: (
        <svg
          width="71px"
          height="76px"
          viewBox="29 14 71 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Group"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            transform="translate(30.000000, 14.000000)"
          >
            <g id="Group-8" fill="#D98A19">
              <g id="Group-7">
                <g id="Group-6">
                  <path
                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group-20"
              transform="translate(0.000000, 14.114286)"
              stroke="#FFFFFF"
              stroke-linecap="square"
            >
              <path
                d="M0.419998734,54.9642857 L4.70316223,54.9642857"
                id="Line"
              ></path>
              <path
                d="M0.419998734,50.4404762 L4.70316223,50.4404762"
                id="Line"
              ></path>
              <path
                d="M0.419998734,45.9166667 L4.70316223,45.9166667"
                id="Line"
              ></path>
              <path
                d="M0.419998734,41.3928571 L2.93999114,41.3928571"
                id="Line"
              ></path>
              <path
                d="M0.419998734,36.8690476 L4.70316223,36.8690476"
                id="Line"
              ></path>
              <path
                d="M0.419998734,32.3452381 L4.70316223,32.3452381"
                id="Line"
              ></path>
              <path
                d="M0.419998734,27.8214286 L4.70316223,27.8214286"
                id="Line"
              ></path>
              <path
                d="M0.419998734,23.297619 L2.93999114,23.297619"
                id="Line"
              ></path>
              <path
                d="M0.419998734,18.7738095 L4.70316223,18.7738095"
                id="Line"
              ></path>
              <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
              <path
                d="M0.419998734,9.72619048 L4.70316223,9.72619048"
                id="Line"
              ></path>
              <path
                d="M0.419998734,5.20238095 L2.93999114,5.20238095"
                id="Line"
              ></path>
              <path
                d="M0.419998734,0.678571429 L4.70316223,0.678571429"
                id="Line"
              ></path>
            </g>
          </g>
        </svg>
      )
    },
    {
      label: 'Consultation',
      imgUrl: 'pi pi-fw pi-database',
      to: '/Consultation',
      disabled: true,  icon: (
        <svg
          width="71px"
          height="76px"
          viewBox="29 14 71 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Group"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            transform="translate(30.000000, 14.000000)"
          >
            <g id="Group-8" fill="#D98A19">
              <g id="Group-7">
                <g id="Group-6">
                  <path
                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group-20"
              transform="translate(0.000000, 14.114286)"
              stroke="#FFFFFF"
              stroke-linecap="square"
            >
              <path
                d="M0.419998734,54.9642857 L4.70316223,54.9642857"
                id="Line"
              ></path>
              <path
                d="M0.419998734,50.4404762 L4.70316223,50.4404762"
                id="Line"
              ></path>
              <path
                d="M0.419998734,45.9166667 L4.70316223,45.9166667"
                id="Line"
              ></path>
              <path
                d="M0.419998734,41.3928571 L2.93999114,41.3928571"
                id="Line"
              ></path>
              <path
                d="M0.419998734,36.8690476 L4.70316223,36.8690476"
                id="Line"
              ></path>
              <path
                d="M0.419998734,32.3452381 L4.70316223,32.3452381"
                id="Line"
              ></path>
              <path
                d="M0.419998734,27.8214286 L4.70316223,27.8214286"
                id="Line"
              ></path>
              <path
                d="M0.419998734,23.297619 L2.93999114,23.297619"
                id="Line"
              ></path>
              <path
                d="M0.419998734,18.7738095 L4.70316223,18.7738095"
                id="Line"
              ></path>
              <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
              <path
                d="M0.419998734,9.72619048 L4.70316223,9.72619048"
                id="Line"
              ></path>
              <path
                d="M0.419998734,5.20238095 L2.93999114,5.20238095"
                id="Line"
              ></path>
              <path
                d="M0.419998734,0.678571429 L4.70316223,0.678571429"
                id="Line"
              ></path>
            </g>
          </g>
        </svg>
      )
    },
    {
      label: 'Stock',
      imgUrl: 'pi pi-fw pi-server',
      to: '/Stock',
      disabled: true,
      icon: (
        <svg
          width="71px"
          height="76px"
          viewBox="29 14 71 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Group"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            transform="translate(30.000000, 14.000000)"
          >
            <g id="Group-8" fill="#D98A19">
              <g id="Group-7">
                <g id="Group-6">
                  <path
                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group-20"
              transform="translate(0.000000, 14.114286)"
              stroke="#FFFFFF"
              stroke-linecap="square"
            >
              <path
                d="M0.419998734,54.9642857 L4.70316223,54.9642857"
                id="Line"
              ></path>
              <path
                d="M0.419998734,50.4404762 L4.70316223,50.4404762"
                id="Line"
              ></path>
              <path
                d="M0.419998734,45.9166667 L4.70316223,45.9166667"
                id="Line"
              ></path>
              <path
                d="M0.419998734,41.3928571 L2.93999114,41.3928571"
                id="Line"
              ></path>
              <path
                d="M0.419998734,36.8690476 L4.70316223,36.8690476"
                id="Line"
              ></path>
              <path
                d="M0.419998734,32.3452381 L4.70316223,32.3452381"
                id="Line"
              ></path>
              <path
                d="M0.419998734,27.8214286 L4.70316223,27.8214286"
                id="Line"
              ></path>
              <path
                d="M0.419998734,23.297619 L2.93999114,23.297619"
                id="Line"
              ></path>
              <path
                d="M0.419998734,18.7738095 L4.70316223,18.7738095"
                id="Line"
              ></path>
              <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
              <path
                d="M0.419998734,9.72619048 L4.70316223,9.72619048"
                id="Line"
              ></path>
              <path
                d="M0.419998734,5.20238095 L2.93999114,5.20238095"
                id="Line"
              ></path>
              <path
                d="M0.419998734,0.678571429 L4.70316223,0.678571429"
                id="Line"
              ></path>
            </g>
          </g>
        </svg>
      )
    }
  ]

  // const Menus = menu.map((items, key) => (
  //   <div className="col-12 lg:col-6 xl:col-3">
  //       <Link to={'/pharmacy'}>
  //         <div className="cardB">
  //           <img src={'https://picsum.photos/id/54/400/300'} />
  //           <div className="card-body">
  //             <h5>{items.label}</h5>
  //           </div>
  //         </div>
  //       </Link>
  //   </div>
  // ))

  // const Menus = menu.map((items, key) => (
  //   <div className="col-12 lg:col-6 xl:col-3">
  //       <Link to={items.to}>
  //       <div className={"cardC cardC--"+key}>
  //         <div className="cardC__img"> </div>

  //           <div className="cardC__img--hover">

  //           </div>

  //         <div className="cardC__info">

  //           <h3 className="cardC__title">{items.label}</h3>

  //         </div>
  //       </div>
  //       </Link>
  //    </div>
  // ))

  const Menus = menu.map((items, key) => (
    <div className="col-12 lg:col-6 xl:col-3">
      <Link to={items.to}>
        <a href="#" className={"cardF "+items.label}>
          <div className="overlay"></div>
          <div className="circle">{items.icon}</div>
          <p>{items.label}</p>
        </a>
      </Link>
    </div>
  ))
  return <div className="grid m-8">{Menus}</div>
}

const comparisonFn = function (prevProps, nextProps) {
  return (
    prevProps.location.pathname === nextProps.location.pathname &&
    prevProps.colorMode === nextProps.colorMode
  )
}

export default React.memo(Dashboard, comparisonFn)
