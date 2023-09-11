import React, { useState } from 'react';
import { Navigate } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { InputLabel, TextField, Box, Stack, Checkbox, Select, MenuItem, Grid } from '@mui/material';
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



const PatientEmailReport = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
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
                alert(data.message)
            });
        } else {
            alert("Api's Error OCCUR");
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
            productName: "", productCategory: "", Species: "",ProductType:"Simple", method: "", brand: "", strain: "", amount: "", saleAmount: "", THCDosage: "", CbdDosage: "", Cbn: "", Unit: "", UnitType: "", PostID: "", RemainingAmount: "", Description: "", Ingredients: "", THC: "", CBD: "", CBG: "", CBC: "", THCA: "", THCVA: "", CBDA: "", CBGA: "", IMG: "", camphene: "", caryophyllene_oxide: "", fenchol: "", geraniol: "", alpha_humulene: "", alpha_phellandrene: "", alpha_pinene: "", alpha_terpinene: "", linalool: "", limonene: "", myrcene: "", ocimene: "", beta_caryophyllene: "", beta_pinene: "", terpineol: "", valencene: ""
        },
        validationSchema: schema,
        validateOnMount: true,
        onSubmit: HandleClick
    });







    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Create Simple Product">
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
                                            required
                                            size="small"
                                            value={values.productName} onChange={handleChange} onBlur={handleBlur} name="productName"
                                        />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <Select fullWidth size='small' required value={values.productCategory} onChange={handleChange} onBlur={handleBlur} name="productCategory">
                                            <MenuItem value="Accessories">Accessories
                                            </MenuItem>
                                            <MenuItem value="Concentrates">Concentrates
                                            </MenuItem>
                                            <MenuItem value="Edibles">Edibles
                                            </MenuItem>
                                            <MenuItem value="Flower">Flower
                                            </MenuItem>
                                            <MenuItem value="Orals">Orals
                                            </MenuItem>
                                            <MenuItem value="Other">Other
                                            </MenuItem>
                                            <MenuItem value="Pre Rolls">Pre Rolls
                                            </MenuItem>
                                            <MenuItem value="Tinctures">Tinctures
                                            </MenuItem>
                                            <MenuItem value="Topicals">Topicals
                                            </MenuItem>
                                            <MenuItem value="Vaporizers">Vaporizers
                                            </MenuItem>
                                        </Select>
                                    </Grid>
                                    {/* <Typography>Meta Information</Typography> */}

                                    <Grid items sx={6} md={3}>
                                        <Select fullWidth required size='small' value={values.Species} onChange={handleChange} onBlur={handleBlur} name="Species">
                                            <MenuItem value="Indica">Indica
                                            </MenuItem>
                                            <MenuItem value="Sativa">Sativa
                                            </MenuItem>
                                            <MenuItem value="Hybrid">Hybrid
                                            </MenuItem>
                                            <MenuItem value="Indica Dominant Hybrid">Indica Dominant Hybrid
                                            </MenuItem>
                                            <MenuItem value="Sative Dominant Hybrid">Sativa Dominant Hybrid
                                            </MenuItem>
                                            <MenuItem value="CBD">CBD
                                            </MenuItem>
                                            <MenuItem value="Blended">Blended
                                            </MenuItem>

                                        </Select>
                                    </Grid>
                                    {/* <InputLabel>Method of use</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <Select fullWidth required size='small' value={values.method} onChange={handleChange} onBlur={handleBlur} name="method">
                                            <MenuItem value="Oral">Oral
                                            </MenuItem>
                                            <MenuItem value="Sublingual">Sublingual
                                            </MenuItem>
                                            <MenuItem value="Topical">Topical
                                            </MenuItem>
                                            <MenuItem value="Inhale">Inhale
                                            </MenuItem>
                                            <MenuItem value="Rectal">Rectal
                                            </MenuItem>


                                        </Select>
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Brand / Company" required fullWidth size="small" value={values.brand} onChange={handleChange} onBlur={handleBlur} name="brand" />
                                    </Grid>
                                    {/* ;ljhgfc */}
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Strain (Kush, Skywalker, etc)" required fullWidth size="small" value={values.strain} onChange={handleChange} onBlur={handleBlur} name="strain" />

                                    </Grid>
                                    {/* <InputLabel>Pricing & Dosage</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <TextField label="Amount" fullWidth size="small" value={values.amount} onChange={handleChange} onBlur={handleBlur} name="amount" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Sale amount" fullWidth size="small" value={values.saleAmount} onChange={handleChange} onBlur={handleBlur} name="saleAmount" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="POS ID %" fullWidth size="small" value={values.PostID} onChange={handleChange} onBlur={handleBlur} name="PostID" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Remaining Amount %" fullWidth size="small" value={values.RemainingAmount} onChange={handleChange} onBlur={handleBlur} name="RemainingAmount" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="Sale amount THC Dosage (in milligrams)" fullWidth size="small" value={values.THCDosage} onChange={handleChange} onBlur={handleBlur} name="THCDosage" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField label="CBD Dosage (in milligrams)" fullWidth size="small" value={values.CbdDosage} onChange={handleChange} onBlur={handleBlur} name="CbdDosage" />

                                    </Grid>

                                    <Grid items sx={6} md={3}>
                                        <TextField label="CBN %" fullWidth size="small" value={values.Cbn} onChange={handleChange} onBlur={handleBlur} name="Cbn" />

                                    </Grid>



                                    <Grid items sx={6} md={3}>
                                        <TextField label="Units Per Product" fullWidth size="small" value={values.Unit} onChange={handleChange} onBlur={handleBlur} name="Unit" />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <Select label="Unit Type" fullWidth size='small' value={values.UnitType} onChange={handleChange} onBlur={handleBlur} name="UnitType">
                                            <MenuItem value="Packages">Package(s)
                                            </MenuItem>
                                            <MenuItem value="Capsules">Capsule(s)
                                            </MenuItem>
                                            <MenuItem value="Cartridges">Cartridge(s)
                                            </MenuItem>
                                            <MenuItem value="Edibles">edible(s)
                                            </MenuItem>
                                            <MenuItem value="Boxes">Box(es)
                                            </MenuItem>
                                        </Select>
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
                                        <TextField required label="Terpineol %" fullWidth size="small" value={values.terpineol} onChange={handleChange} onBlur={handleBlur} name="terpineol" />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField required label="Valencene %" fullWidth size="small" value={values.valencene} onChange={handleChange} onBlur={handleBlur} name="valencene" />
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

                                <button style={{border:'0px solid red',borderRadius:4,backgroundColor:'green',color:'white',padding:10}} onClick={handleSubmit}>
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

export default PatientEmailReport;
