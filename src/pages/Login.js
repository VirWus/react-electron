import React, { useState,useRef } from 'react'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { history } from '../Helpers/history'
import { Toast } from 'primereact/toast';
import { useFormik } from 'formik'
import { useUserActions } from '../Actions/users.actions'
import loginImg from '../assets/login.png'
const Login = props => {
  const [checked, setChecked] = useState(false)
  const userActions = useUserActions()
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})
  const toast = useRef(null);

  const formik = useFormik({
    initialValues: {
      id: 1,
      username: '',
      password: ''
    },
    validate: data => {
      let errors = {}

      if (!data.username) {
        errors.name = 'Name is required.'
      }

      if (!data.password) {
        errors.password = 'Password is required.'
      }

      return errors
    },
    onSubmit: data => {
      // setFormData(data)
      //setShowMessage(true)
      // console.log(data)
      userActions.register(data).then((data) => {
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Register', life: 3000 });
      })
      formik.resetForm()
    }
  })

  return (

    <div className="grid align-items-center justify-content-center">   <Toast ref={toast} />
      <div className="grid col-12 justify-content-center">
   
        <img
          src={loginImg}
          width="300"
          style={{ position: 'relative' }}
          alt="login"
        />
      </div>
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        </div>

        <div>
          <form onSubmit={formik.handleSubmit}>
            <label
              htmlFor="username"
              className="block text-900 font-medium mb-2"
            >
              username
            </label>
            <InputText
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              autoFocus
              className="w-full mb-3"
            />
            <label
              htmlFor="password"
              className="block text-900 font-medium mb-2"
            >
              Password
            </label>
            <InputText
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              toggleMask
              className="w-full mb-3"
            />
            <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">
                <Checkbox
                  id="rememberme"
                  onChange={e => setChecked(e.checked)}
                  checked={checked}
                  className="mr-2"
                />
                <label htmlFor="rememberme">Remember me</label>
              </div>
            </div>

            {/* [{"id":1,"username":"user","password":"password"}] */}

            <Button
              type="submit"
              label="Sign In"
              icon="pi pi-user"
              className="w-full"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

const comparisonFn = function (prevProps, nextProps) {
  return prevProps.location.pathname === nextProps.location.pathname
}

export default React.memo(Login, comparisonFn)
