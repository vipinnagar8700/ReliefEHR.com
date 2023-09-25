import React, { useState } from 'react';
import { Navigate } from 'react-router';
import Page from '@layout/Page';
import { useSnackbar } from 'notistack';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { InputLabel, TextField, Box, Stack, Checkbox, option, Grid } from '@mui/material';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { addProductesData } from '@components/Api/AllApi';
import Cookies from 'js-cookie';
import { useFormik } from "formik";
import * as yup from 'yup';


const schema = yup.object().shape({
    productName: yup.string(),
    productCategory: yup.string(),
    Species: yup.string(),
    method: yup.string(),
    brand: yup.string(),
    strain: yup.string(),
    amount: yup.string(),
    saleAmount: yup.string(),
    THCDosage: yup.string(),
    CbdDosage: yup.string(),
    Cbn: yup.string(),
    Unit: yup.string(),
    UnitType: yup.string(),
    PostID: yup.string(),
    RemainingAmount: yup.string(),
    Description: yup.string(),
    Ingredients: yup.string(),
    THC: yup.string(),
    CBD: yup.string(),
    CBG: yup.string(),
    CBC: yup.string(),
    THCA: yup.string(),
    THCVA: yup.string(),
    CBDA: yup.string(),
    CBGA: yup.string(),
    IMG: yup.string(),
    camphene: yup.string(),
    caryophyllene_oxide: yup.string(),
    fenchol: yup.string(),
    geraniol: yup.string(),
    alpha_humulene: yup.string(),
    alpha_phellandrene: yup.string(),
    alpha_pinene: yup.string(),

    alpha_terpinene: yup.string(),
    linalool: yup.string(),
    limonene: yup.string(),
    myrcene: yup.string(),
    ocimene: yup.string(),
    beta_caryophyllene: yup.string(),
    beta_pinene: yup.string(),
    terpineol: yup.string(),
    valencene: yup.string(),
})



const PatientStatusreport = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedTab, setselectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setselectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });




    const HandleClick = (values) => {
        console.log("Data That we Add", values.productName, values.productCategory, values.Species, values.method, values.brand, values.strain, values.amount, values.saleAmount, values.THCDosage, values.CbdDosage, values.cbn, values.Unit, values.UnitType, values.PostID, values.RemainingAmount, values.Description, values.Ingredients, values.THC, values.CBD, values.CBG, values.CBC, values.THCA, values.THCVA, values.CBDA, values.CBGA, values.IMG, values.camphene, values.caryophyllene_oxide, values.fenchol, values.geraniol, values.alpha_humulene, values.alpha_phellandrene, values.alpha_pinene, values.alpha_terpinene, values.linalool, values.limonene, values.myrcene, values.ocimene, values.beta_caryophyllene, values.beta_pinene, values.terpineol, values.valencene);

        const PatientAddData = addProductesData(values);
        console.log(PatientAddData, "Product Add Data");

        if (PatientAddData) {
            PatientAddData.then((data) => {
                console.log(data);
                // alert(data.message)
                enqueueSnackbar(data.message, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            });
        } else {
            // alert("Api's Error OCCUR");
            enqueueSnackbar("Something Went Wrong try again!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            })
        }

    };


    const {
        setFieldValue,
        handleSubmit,
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        isValid,
        dirty,
    } = useFormik({
        initialValues: {
            productName: "", productCategory: "", Species: "", ProductType: "Variable", method: "", brand: "", strain: "", amount: "", saleAmount: "", THCDosage: "", CbdDosage: "", Cbn: "", Unit: "", UnitType: "", PostID: "", RemainingAmount: "", Description: "", Ingredients: "", THC: "", CBD: "", CBG: "", CBC: "", THCA: "", THCVA: "", CBDA: "", CBGA: "", IMG: "", camphene: "", caryophyllene_oxide: "", fenchol: "", geraniol: "", alpha_humulene: "", alpha_phellandrene: "", alpha_pinene: "", alpha_terpinene: "", linalool: "", limonene: "", myrcene: "", ocimene: "", beta_caryophyllene: "", beta_pinene: "", terpineol: "", valencene: ""
        },
        validationSchema: schema,
        validateOnMount: true,
        onSubmit: HandleClick
    });







    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Create Variable Product">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                <Checkbox /> Display Product in Shop?
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container sx={{ justifyContent: 'center' }} mt={2} spacing={3} gap={3}>

                                    <Grid items sx={6} md={3} >
                                        <TextField
                                            label="Product Name"
                                            fullWidth
                                            size="small"
                                            value={values.productName} onChange={handleChange} onBlur={handleBlur} name="productName"
                                        />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <select fullWidth size='small' value={values.productCategory} style={{ width: '100%', padding: '10px', borderRadius: 3 }} onChange={handleChange} onBlur={handleBlur} name="productCategory">
                                            <option value="Accessories">Accessories
                                            </option>
                                            <option value="Concentrates">Concentrates
                                            </option>
                                            <option value="Edibles">Edibles
                                            </option>
                                            <option value="Flower">Flower
                                            </option>
                                            <option value="Orals">Orals
                                            </option>
                                            <option value="Other">Other
                                            </option>
                                            <option value="Pre Rolls">Pre Rolls
                                            </option>
                                            <option value="Tinctures">Tinctures
                                            </option>
                                            <option value="Topicals">Topicals
                                            </option>
                                            <option value="Vaporizers">Vaporizers
                                            </option>
                                        </select>
                                    </Grid>
                                    {/* <Typography>Meta Information</Typography> */}

                                    <Grid items sx={6} md={3}>
                                        <select fullWidth size='small' value={values.Species} style={{ width: '100%', padding: '10px', borderRadius: 3 }} onChange={handleChange} onBlur={handleBlur} name="Species">
                                            <option value="Indica">Indica
                                            </option>
                                            <option value="Sativa">Sativa
                                            </option>
                                            <option value="Hybrid">Hybrid
                                            </option>
                                            <option value="Indica Dominant Hybrid">Indica Dominant Hybrid
                                            </option>
                                            <option value="Sative Dominant Hybrid">Sativa Dominant Hybrid
                                            </option>
                                            <option value="CBD">CBD
                                            </option>
                                            <option value="Blended">Blended
                                            </option>

                                        </select>
                                    </Grid>
                                    {/* <InputLabel>Method of use</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <select fullWidth size='small' value={values.method} style={{ width: '100%', padding: '10px', borderRadius: 3 }} onChange={handleChange} onBlur={handleBlur} name="method">
                                            <option value="Oral">Oral
                                            </option>
                                            <option value="Sublingual">Sublingual
                                            </option>
                                            <option value="Topical">Topical
                                            </option>
                                            <option value="Inhale">Inhale
                                            </option>
                                            <option value="Rectal">Rectal
                                            </option>


                                        </select>
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Brand / Company" fullWidth size="small" value={values.brand} onChange={handleChange} onBlur={handleBlur} name="brand" />
                                    </Grid>
                                    {/* ;ljhgfc */}
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Strain (Kush, Skywalker, etc)" fullWidth size="small" value={values.strain} onChange={handleChange} onBlur={handleBlur} name="strain" />

                                    </Grid>
                                    {/* <InputLabel>Pricing & Dosage</InputLabel> */}


                                    <Grid items sx={6} md={3}>
                                        <TextField label="POS ID %" fullWidth size="small" value={values.PostID} onChange={handleChange} onBlur={handleBlur} name="PostID" />

                                    </Grid>




                                    <Grid items sx={6} md={3}>
                                        <TextField label="Units Per Product" fullWidth size="small" value={values.Unit} onChange={handleChange} onBlur={handleBlur} name="Unit" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <select label="Unit Type" fullWidth size='small' style={{ width: '100%', padding: '10px', borderRadius: 3 }} value={values.UnitType} onChange={handleChange} onBlur={handleBlur} name="UnitType">
                                            <option value="Packages">Package(s)
                                            </option>
                                            <option value="Capsules">Capsule(s)
                                            </option>
                                            <option value="Cartridges">Cartridge(s)
                                            </option>
                                            <option value="Edibles">edible(s)
                                            </option>
                                            <option value="Boxes">Box(es)
                                            </option>
                                        </select>
                                    </Grid>
                                    {/* <InputLabel>Inventory & POS Information </InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <TextField label="Product Description" fullWidth size="small" value={values.Description} onChange={handleChange} onBlur={handleBlur} name="Description" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Ingredients" fullWidth size="small" value={values.Ingredients} onChange={handleChange} onBlur={handleBlur} name="Ingredients" />

                                    </Grid>
                                    {/* <InputLabel>Cannabinoids</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <TextField label="THC %" fullWidth size="small" value={values.THC} onChange={handleChange} onBlur={handleBlur} name="THC" />

                                    </Grid>

                                    <Grid items sx={6} md={3}>
                                        <TextField label="CBD %" fullWidth size="small" value={values.CBD} onChange={handleChange} onBlur={handleBlur} name="CBD" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="CBN %" fullWidth size="small" value={values.CBN} onChange={handleChange} onBlur={handleBlur} name="CBN" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="CBG %" fullWidth size="small" value={values.CBG} onChange={handleChange} onBlur={handleBlur} name="CBG" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="CBC %" fullWidth size="small" value={values.CBC} onChange={handleChange} onBlur={handleBlur} name="CBC" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="THCA %" fullWidth size="small" value={values.THCA} onChange={handleChange} onBlur={handleBlur} name="THCA" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="THCVA %" fullWidth size="small" value={values.THCVA} onChange={handleChange} onBlur={handleBlur} name="THCVA" />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField label="CBDA %" fullWidth size="small" value={values.CBDA} onChange={handleChange} onBlur={handleBlur} name="CBDA" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="CBGA %" fullWidth size="small" value={values.CBGA} onChange={handleChange} onBlur={handleBlur} name="CBGA" />

                                    </Grid>

                                    {/* <InputLabel>Terpenes</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <TextField label="Camphene %" fullWidth size="small" value={values.camphene} onChange={handleChange} onBlur={handleBlur} name="camphene" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Beta-Caryophyllene %" fullWidth size="small" value={values.beta_caryophyllene} onChange={handleChange} onBlur={handleBlur} name="beta_caryophyllene" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Caryophyllene Oxide %" fullWidth size="small" value={values.caryophyllene_oxide} onChange={handleChange} onBlur={handleBlur} name="caryophyllene_oxide" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Fenchol %" fullWidth size="small" value={values.fenchol} onChange={handleChange} onBlur={handleBlur} name="fenchol" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Geraniol %" fullWidth size="small" value={values.geraniol} onChange={handleChange} onBlur={handleBlur} name="geraniol" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Alpha-Humulene %" fullWidth size="small" value={values.alpha_humulene} onChange={handleChange} onBlur={handleBlur} name="alpha_humulene" />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Linalool %" fullWidth size="small" value={values.linalool} onChange={handleChange} onBlur={handleBlur} name="linalool" />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField label="Limonene %" fullWidth size="small" value={values.limonene} onChange={handleChange} onBlur={handleBlur} name="limonene" />

                                    </Grid><Grid items sx={6} md={3} >
                                        <TextField label="Myrcene %" fullWidth size="small" value={values.myrcene} onChange={handleChange} onBlur={handleBlur} name="myrcene" />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField label="Ocimene %" fullWidth size="small" value={values.ocimene} onChange={handleChange} onBlur={handleBlur} name="ocimene" />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField label="Alpha-Phellandrene %" fullWidth size="small" value={values.alpha_phellandrene} onChange={handleChange} onBlur={handleBlur} name="alpha_phellandrene" />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField label="Alpha-Pinene %" fullWidth size="small" value={values.alpha_pinene} onChange={handleChange} onBlur={handleBlur} name="alpha_pinene" />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField label="Beta-Pinene %" fullWidth size="small" value={values.beta_pinene} onChange={handleChange} onBlur={handleBlur} name="beta_pinene" />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField label="Alpha-Terpinene %" fullWidth size="small" value={values.alpha_terpinene} onChange={handleChange} onBlur={handleBlur} name="alpha_terpinene" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Terpineol %" fullWidth size="small" value={values.terpineol} onChange={handleChange} onBlur={handleBlur} name="terpineol" />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Valencene %" fullWidth size="small" value={values.valencene} onChange={handleChange} onBlur={handleBlur} name="valencene" />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField type='file' fullWidth size="small" name="IMG" onChange={(event) => {
                                            const file = event.target.files[0];
                                            if (file) {
                                                setFieldValue("IMG", file);
                                            }
                                        }} />
                                    </Grid>
                                </Grid>

                                <button style={{ border: '0px solid red', borderRadius: 4, backgroundColor: 'green', color: 'white', padding: 10,marginLeft:'100px',marginTop:'5px' }} onClick={handleSubmit}>
                                    Submit
                                </button>
                            </form>


                        </CardContent>
                    </Card>
                </div >
            </Page >
        </>
    );
};



export default PatientStatusreport;
