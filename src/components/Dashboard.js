import React, {useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = props => {

  useEffect(() => {
 
  }, [])


  return (

    <div className="grid m-8">
 
      <div className="col-12 lg:col-6 xl:col-3 ">
      <Link to={'/pharmacy'}>
          {' '}
          <div className="card mb-0 transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500
       cursor-pointer">
            <div className="flex justify-content-between mb-3 ">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Pharmacy
                </span>
                <div className="text-900 font-medium text-xl">12</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-inbox text-orange-500 text-xl" />
              </div>
            </div>
            <span className="text-green-500 font-medium">+2 </span>
            <span className="text-500">since last week</span>
          </div>{' '}
        </Link>
      </div>

      <div className="col-12 lg:col-6 xl:col-3 transition-duration-500 transition-shaddow transition-duration-500 shaddow-2 hover:shaddow-8">
        <Link to={'/Comptabilite'}>
          {' '}
          <div className="card mb-0 ">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Comptabilité
                </span>
                <div className="text-900 font-medium text-xl">12</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-inbox text-orange-500 text-xl" />
              </div>
            </div>
            <span className="text-green-500 font-medium">+2 </span>
            <span className="text-500">since last week</span>
          </div>{' '}
        </Link>
      </div>

      <div className="col-12 lg:col-6 xl:col-3">
        <Link to={'/Maternite'}>
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Maternité
                </span>
                <div className="text-900 font-medium text-xl">21</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-users text-cyan-500 text-xl" />
              </div>
            </div>
            <span className="text-green-500 font-medium">4</span>
            <span className="text-500">newly registered</span>
          </div>{' '}
        </Link>
      </div>

      <div className="col-12 lg:col-6 xl:col-3 ">
      <Link to={'/Imagerie'}>
          {' '}
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">Imagerie Médical</span>
              <div className="text-900 font-medium text-xl">152</div>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-blue-100 border-round"
              style={{ width: '2.5rem', height: '2.5rem' }}
            >
              <i
                className="pi pi-user-plus text-blue-500 text-xl"
              />
            </div>
          </div>
          <span className="text-green-500 font-medium">24 new </span>
          <span className="text-500">since last visit</span>
        </div>
        </Link>
      </div>

      <div className="col-12 lg:col-6 xl:col-3 ">
      <Link to={'/Dossier'}>
          {' '}
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">Dossier Médical</span>
              <div className="text-900 font-medium text-xl">152</div>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-blue-100 border-round"
              style={{ width: '2.5rem', height: '2.5rem' }}
            >
              <i
                className="pi pi-user-plus text-blue-500 text-xl"
              />
            </div>
          </div>
          <span className="text-green-500 font-medium">24 new </span>
          <span className="text-500">since last visit</span>
        </div>
        </Link>
      </div>

      <div className="col-12 lg:col-6 xl:col-3 ">
      <Link to={'/PMA'}>
          {' '}
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">PMA</span>
              <div className="text-900 font-medium text-xl">152</div>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-blue-100 border-round"
              style={{ width: '2.5rem', height: '2.5rem' }}
            >
              <i
                className="pi pi-user-plus text-blue-500 text-xl"
              />
            </div>
          </div>
          <span className="text-green-500 font-medium">24 new </span>
          <span className="text-500">since last visit</span>
        </div>
        </Link>
      </div>

      <div className="col-12 lg:col-6 xl:col-3 ">
      <Link to={'/Consultation'}>
          {' '}
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">Consultation</span>
              <div className="text-900 font-medium text-xl">152</div>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-blue-100 border-round"
              style={{ width: '2.5rem', height: '2.5rem' }}
            >
              <i
                className="pi pi-user-plus text-blue-500 text-xl"
              />
            </div>
          </div>
          <span className="text-green-500 font-medium">24 new </span>
          <span className="text-500">since last visit</span>
        </div>
        </Link>
      </div>


      <div className="col-12 lg:col-6 xl:col-3 ">
      <Link to={'/Stock'}>
          {' '}
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">Stock</span>
              <div className="text-900 font-medium text-xl">152</div>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-blue-100 border-round"
              style={{ width: '2.5rem', height: '2.5rem' }}
            >
              <i
                className="pi pi-user-plus text-blue-500 text-xl"
              />
            </div>
          </div>
          <span className="text-green-500 font-medium">24 new </span>
          <span className="text-500">since last visit</span>
        </div>
        </Link>
      </div>

    </div>
  )
}

const comparisonFn = function (prevProps, nextProps) {
  return (
    prevProps.location.pathname === nextProps.location.pathname &&
    prevProps.colorMode === nextProps.colorMode
  )
}

export default React.memo(Dashboard, comparisonFn)
