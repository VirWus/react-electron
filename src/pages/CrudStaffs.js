import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { StaffService } from '../service/StaffService';
import { Dropdown } from 'primereact/dropdown';

const CrudStaffs = () => {
    let emptyStaff = {
       id: null,
      firstName: "",
      lastName: "",
      maidenName: "",
      age: 0,
      gender: "",
      email: "",
      type:"",
      phone: "",
      username: "",
      password: "",
      birthDate: "",
      image: "",
      bloodGroup: "",
      height: 0,
      weight: 0 ,
    };

    const [staffs, setStaffs] = useState(null);
    const [StaffDialog, setStaffDialog] = useState(false);
    const [deleteStaffDialog, setDeleteStaffDialog] = useState(false);
    const [deleteStaffsDialog, setDeleteStaffsDialog] = useState(false);
    const [staff, setStaff] = useState(emptyStaff);
    const [selectedStaffs, setSelectedStaffs] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [gender, setGender] = useState('');

    const genders = [
        { name: 'Male', code: 'Mr' },
        { name: 'Female', code: 'MMe' },
    ];
    useEffect(() => {
        const staffService = new StaffService();
        staffService.getStaffs().then(data => setStaffs(data)
        );
        //console.log(staffs)
    }, []);

    const openNew = () => {
        setStaff(emptyStaff);
        setSubmitted(false);
        setStaffDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setStaffDialog(false);
    }

    const hideDeleteStaffDialog = () => {
        setDeleteStaffDialog(false);
    }

    const hideDeleteStaffsDialog = () => {
        setDeleteStaffsDialog(false);
    }

    const saveStaff = () => {
        setSubmitted(true);

        if (staff.username.trim()) {
            let _staffs = [...staffs];
            let _staff = { ...staff };
            if (staff.id) {
                const index = findIndexById(staff.id);

                _staffs[index] = _staff;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                _staff.id = createId();
                _staff.image = 'product-placeholder.svg';
                _staffs.push(_staff);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setStaffs(_staffs);
            setStaffDialog(false);
            setStaff(emptyStaff);
        }
    }

    const editStaff = (staff) => {
        setStaff({ ...staff });
        setStaffDialog(true);
    }

    const confirmDeleteStaff = (staff) => {
        setStaff(staff);
        setDeleteStaffDialog(true);
    }

    const deleteStaff = () => {
        let _staffs = staffs.filter(val => val.id !== staff.id);
        setStaffs(_staffs);
        setDeleteStaffDialog(false);
        setStaff(emptyStaff);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < staffs.length; i++) {
            if (staffs[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteStaffsDialog(true);
    }

    const deleteSelectedStaffs = () => {
        let _staffs = staffs.filter(val => !selectedStaffs.includes(val));
        setStaffs(_staffs);
        setDeleteStaffsDialog(false);
        setSelectedStaffs(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _staff = { ...staff };
        _staff['type'] = e.value;
        setStaff(_staff);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _staff = { ...staff };
        _staff[`${name}`] = val;

        setStaff(_staff);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _staff = { ...staff };
        _staff[`${name}`] = val;

        setStaff(_staff);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedStaffs || !selectedStaffs.length} />
                </div>
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="mr-2 inline-block" />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
            </React.Fragment>
        )
    }

    const codeBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Code</span>
                {rowData.id}
            </>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.username}
            </>
        );
    }

    const imageBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Image</span>
                <img src={`${rowData.image}`} alt={rowData.image} className="shadow-2" width="100" />
            </>
        )
    }


    const categoryBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Type</span>
                {rowData.type}
            </>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`product-badge status-${rowData.gender.toLowerCase()}`}>{rowData.gender}</span>
            </>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editStaff(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning mt-2" onClick={() => confirmDeleteStaff(rowData)} />
            </div>
        );
    }

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Manage Staffs</h5>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const staffDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveStaff} />
        </>
    );
    const deleteStaffDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteStaffDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteStaff} />
        </>
    );
    const deleteStaffsDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteStaffsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedStaffs} />
        </>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable ref={dt} value={staffs} selection={selectedStaffs} onSelectionChange={(e) => setSelectedStaffs(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} staffs"
                        globalFilter={globalFilter} emptyMessage="No staffs found." header={header} responsiveLayout="scroll">
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem'}}></Column>
                        <Column field="code" header="Code" sortable body={codeBodyTemplate} headerStyle={{ width: '14%', minWidth: '10rem' }}></Column>
                        <Column field="name" header="Name" sortable body={nameBodyTemplate} headerStyle={{ width: '14%', minWidth: '10rem' }}></Column>
                        <Column header="Image" body={imageBodyTemplate} headerStyle={{ width: '14%', minWidth: '10rem' }}></Column>
                        <Column field="type" header="Type" sortable body={categoryBodyTemplate} headerStyle={{ width: '14%', minWidth: '10rem' }}></Column>
                        <Column field="gender" header="Gender" body={statusBodyTemplate} sortable headerStyle={{ width: '14%', minWidth: '10rem' }}></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>

                    <Dialog visible={StaffDialog} style={{ width: '450px' }} header="Staff Details" modal className="p-fluid" footer={staffDialogFooter} onHide={hideDialog}>
                        {staff.image && <img src={`${staff.image}`} alt={staff.image} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />}
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <InputText id="name" value={staff.username} onChange={(e) => onInputChange(e, 'username')} required autoFocus className={classNames({ 'p-invalid': submitted && !staff.name })} />
                            {submitted && !staff.name && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" value={staff.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>

                        <div className="field">
                            <label className="mb-3">Type</label>
                            <div className="formgrid grid">
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={staff.type === 'Admin Tech'} />
                                    <label htmlFor="category1">Admin Tech</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={staff.type === 'Admin Metier'} />
                                    <label htmlFor="category2">Admin Metier</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={staff.type === 'Pharmacy'} />
                                    <label htmlFor="category3">Pharmacy</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={staff.type === 'Staff'} />
                                    <label htmlFor="category4">Staff</label>
                                </div>
                            </div>
                        </div>

                        
                        <div className="field">
                                <label  className="mb-3" htmlFor="dropdown">Gender</label>
                                <Dropdown className="col-6" id="dropdown" options={genders} value={gender} onChange={(e) => setGender(e.value)} optionLabel="name" className="p-invalid"/>
                            </div>
                     

                    </Dialog>

                    <Dialog visible={deleteStaffDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteStaffDialogFooter} onHide={hideDeleteStaffDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {staff && <span>Are you sure you want to delete <b>{staff.username}</b>?</span>}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteStaffsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteStaffsDialogFooter} onHide={hideDeleteStaffsDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {staff && <span>Are you sure you want to delete the selected staffs?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(CrudStaffs, comparisonFn);