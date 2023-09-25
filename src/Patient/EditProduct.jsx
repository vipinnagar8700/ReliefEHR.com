import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
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
import { GetSingleProduct, addProductesData, updateProductData } from '@components/Api/AllApi';
import Cookies from 'js-cookie';





const EditSingleProduct = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedTab, setselectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [pro, setpro] = useState(false)
    const [count, setCount] = useState(0)
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const { id, user_id, company_id, product_name, product_category, CBC, CBD, CBDA, CBG, CBGA, THC, THCA, THCVA, alpha_humulene
        , alpha_phellandrene, alpha_pinene, alpha_terpinene
        , amount
        , beta_caryophyllene, beta_pinene, brand
        , camphene
        , caryophyllene_oxide
        , cbd_dosage
        , cbn, description
        , fenchol, geraniol, img, ingredients,
        limonene, linalool
        , method
        , myrcene
        , ocimene
        , pos_id
        , product_type, remaining_amount
        , sale_amount
        , species, strain, terpineol, thc_dosage, unit, unit_type, valencene
    } = pro;



    console.log(id, user_id, company_id, product_name, product_category, CBC, CBD, CBDA, CBG, CBGA, THC, THCA, THCVA, alpha_humulene
        , alpha_phellandrene, alpha_pinene, alpha_terpinene
        , amount
        , beta_caryophyllene, beta_pinene, brand
        , camphene
        , caryophyllene_oxide
        , cbd_dosage
        , cbn, description
        , fenchol, geraniol, img, ingredients,
        limonene, linalool
        , method
        , myrcene
        , ocimene
        , pos_id
        , product_type, remaining_amount
        , sale_amount
        , species, strain, terpineol, thc_dosage, unit, unit_type, valencene, "ALL PRODUCT DATA")



    const handleModalClose = () => {
        setOpenModal(false);
        setselectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    let { p_id } = useParams();
    // alert(p_id,"JHJHJHJHJHHJHJH")

    useEffect(() => {


        const SingleProduct = GetSingleProduct(p_id)
        if (SingleProduct) {
            SingleProduct.then((data) => {
                console.log(data?.results, "PPPPPPPPPPPPPPPPPPPPPPPPP")
                setpro(data?.results)
            })
        }
    }, [])




    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            console.log(p_id, product_name, product_category, CBC, CBD, CBDA, CBG, CBGA, THC, THCA, THCVA, alpha_humulene
                , alpha_phellandrene, alpha_pinene, alpha_terpinene
                , amount
                , beta_caryophyllene, beta_pinene, brand
                , camphene
                , caryophyllene_oxide
                , cbd_dosage
                , cbn, description
                , fenchol, geraniol, img, ingredients,
                limonene, linalool
                , method
                , myrcene
                , ocimene
                , pos_id
                , product_type, remaining_amount
                , sale_amount
                , species, strain, terpineol, thc_dosage, unit, unit_type, valencene, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = updateProductData(p_id, product_name, product_category, CBC, CBD, CBDA, CBG, CBGA, THC, THCA, THCVA, alpha_humulene
                , alpha_phellandrene, alpha_pinene, alpha_terpinene
                , amount
                , beta_caryophyllene, beta_pinene, brand
                , camphene
                , caryophyllene_oxide
                , cbd_dosage
                , cbn, description
                , fenchol, geraniol, img, ingredients,
                limonene, linalool
                , method
                , myrcene
                , ocimene
                , pos_id
                , product_type, remaining_amount
                , sale_amount
                , species, strain, terpineol, thc_dosage, unit, unit_type, valencene);


            if (result) {
                result.then((data) => {
                    console.log(data.message, "thtrtrer;ojgsrdbehx");
                    // alert(data.messege);
                    enqueueSnackbar(data.message, {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                })
                setCount(count + 1)
            } else {
                console.log("error")
                enqueueSnackbar("Something Went Wrong try again!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }
                })
            }

        } catch (error) {
            enqueueSnackbar(error, "Something Went Wrong try again!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            })
        }
    };


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Edit  Product Data">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                <Checkbox /> Display Product in Shop?
                            </Typography>
                            <form >
                                <Grid container sx={{ justifyContent: 'center' }} mt={2} spacing={3} gap={3}>

                                    <Grid items sx={6} md={3} >
                                        <InputLabel>Product Name</InputLabel>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            name="product_name" value={product_name} onChange={(e) => {
                                                setpro({
                                                    ...pro, product_name: e.target.value
                                                })
                                            }}
                                        />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Product Category</InputLabel>
                                        <select fullWidth size='small' name="product_category" style={{ width: '100%', padding: '10px', borderRadius: 3 }} value={product_category} onChange={(e) => {
                                            setpro({
                                                ...pro, product_category: e.target.value
                                            })
                                        }} >
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
                                        <InputLabel>Species</InputLabel>
                                        <select fullWidth size='small' name="species" style={{ width: '100%', padding: '10px', borderRadius: 3 }} value={species} onChange={(e) => {
                                            setpro({
                                                ...pro, species: e.target.value
                                            })
                                        }}>
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
                                        <InputLabel>Method of Use</InputLabel>
                                        <select fullWidth size='small' name="method" style={{ width: '100%', padding: '10px', borderRadius: 3 }} value={method} onChange={(e) => {
                                            setpro({
                                                ...pro, method: e.target.value
                                            })
                                        }}>
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
                                        <InputLabel>Brand / Company</InputLabel>
                                        <TextField fullWidth size="small" name="brand" value={brand} onChange={(e) => {
                                            setpro({
                                                ...pro, brand: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    {/* ;ljhgfc */}
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Strain (Kush, Skywalker, etc)</InputLabel>
                                        <TextField fullWidth size="small" name="strain" value={strain} onChange={(e) => {
                                            setpro({
                                                ...pro, strain: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    {/* <InputLabel>Pricing & Dosage</InputLabel> */}
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Amount</InputLabel>
                                        <TextField fullWidth size="small" name="amount" value={amount} onChange={(e) => {
                                            setpro({
                                                ...pro, amount: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Sale amount</InputLabel>
                                        <TextField fullWidth size="small" name="sale_amount" value={sale_amount} onChange={(e) => {
                                            setpro({
                                                ...pro, sale_amount: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Unit Type</InputLabel>
                                        <select fullWidth size='small' style={{ width: '100%', padding: '10px', borderRadius: 3 }} name="unit_type" value={unit_type} onChange={(e) => {
                                            setpro({
                                                ...pro, unit_type: e.target.value
                                            })
                                        }}>
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
                                        <InputLabel>THC Dosage (in milligrams)</InputLabel>
                                        <TextField fullWidth size="small" name="thc_dosage" value={thc_dosage} onChange={(e) => {
                                            setpro({
                                                ...pro, thc_dosage: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>CBD Dosage (in milligrams)</InputLabel>
                                        <TextField fullWidth size="small" name="cbd_dosage" value={cbd_dosage} onChange={(e) => {
                                            setpro({
                                                ...pro, cbd_dosage: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    {/* <InputLabel>Cannabinoids</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <InputLabel>CBN %</InputLabel>
                                        <TextField fullWidth size="small" name="cbn" value={cbn} onChange={(e) => {
                                            setpro({
                                                ...pro, cbn: e.target.value
                                            })
                                        }} />

                                    </Grid>

                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Units Per Product</InputLabel>
                                        <TextField fullWidth size="small" name="unit" value={unit} onChange={(e) => {
                                            setpro({
                                                ...pro, unit: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Unit Type</InputLabel>
                                        <TextField fullWidth size="small" name="pos_id" value={pos_id} onChange={(e) => {
                                            setpro({
                                                ...pro, pos_id: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Amount Remaining in Inventory</InputLabel>
                                        <TextField fullWidth size="small" name="remaining_amount" value={remaining_amount} onChange={(e) => {
                                            setpro({
                                                ...pro, remaining_amount: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Product Description</InputLabel>
                                        <TextField fullWidth size="small" name="description" value={description} onChange={(e) => {
                                            setpro({
                                                ...pro, description: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Ingredients</InputLabel>
                                        <TextField fullWidth size="small" name="ingredients" value={ingredients} onChange={(e) => {
                                            setpro({
                                                ...pro, ingredients: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>THC %</InputLabel>
                                        <TextField fullWidth size="small" name="THC" value={THC} onChange={(e) => {
                                            setpro({
                                                ...pro, THC: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>CBD %</InputLabel>
                                        <TextField fullWidth size="small" name="CBD" value={CBD} onChange={(e) => {
                                            setpro({
                                                ...pro, CBD: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>CBG %</InputLabel>
                                        <TextField fullWidth size="small" name="CBG" value={CBG} onChange={(e) => {
                                            setpro({
                                                ...pro, CBG: e.target.value
                                            })
                                        }} />

                                    </Grid>

                                    {/* <InputLabel>Terpenes</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <InputLabel>CBC  %</InputLabel>
                                        <TextField fullWidth size="small" name="CBC" value={CBC} onChange={(e) => {
                                            setpro({
                                                ...pro, CBC: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>THCA %</InputLabel>
                                        <TextField fullWidth size="small" name="THCA" value={THCA} onChange={(e) => {
                                            setpro({
                                                ...pro, THCA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>THCVA %</InputLabel>
                                        <TextField fullWidth size="small" name="THCVA" value={THCVA} onChange={(e) => {
                                            setpro({
                                                ...pro, THCVA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>CBDA %</InputLabel>
                                        <TextField fullWidth size="small" name="CBDA" value={CBDA} onChange={(e) => {
                                            setpro({
                                                ...pro, CBDA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>CBGA %</InputLabel>
                                        <TextField fullWidth size="small" name="CBGA" value={CBGA} onChange={(e) => {
                                            setpro({
                                                ...pro, CBGA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Camphene %</InputLabel>
                                        <TextField fullWidth size="small" name="camphene" value={camphene} onChange={(e) => {
                                            setpro({
                                                ...pro, camphene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Beta-Caryophyllene %</InputLabel>
                                        <TextField fullWidth size="small" name="beta_caryophyllene" value={beta_caryophyllene} onChange={(e) => {
                                            setpro({
                                                ...pro, beta_caryophyllene: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Caryophyllene Oxide %</InputLabel>
                                        <TextField fullWidth size="small" name="caryophyllene_oxide" value={caryophyllene_oxide} onChange={(e) => {
                                            setpro({
                                                ...pro, caryophyllene_oxide: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3} >
                                        <InputLabel>Fenchol %</InputLabel>
                                        <TextField fullWidth size="small" name="fenchol" value={fenchol} onChange={(e) => {
                                            setpro({
                                                ...pro, fenchol: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    {/* <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="product_name" value={product_name} onChange={(e) => {
                                            setpro({
                                                ...pro, product_name: e.target.value
                                            })
                                        }} />

                                    </Grid> */}
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Geraniol %</InputLabel>
                                        <TextField fullWidth size="small" name="geraniol" value={geraniol} onChange={(e) => {
                                            setpro({
                                                ...pro, geraniol: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Alpha-Humulene %</InputLabel>
                                        <TextField fullWidth size="small" name="alpha_humulene" value={alpha_humulene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_humulene: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Linalool %</InputLabel>
                                        <TextField fullWidth size="small" name="linalool" value={linalool} onChange={(e) => {
                                            setpro({
                                                ...pro, linalool: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Limonene %</InputLabel>
                                        <TextField fullWidth size="small" name="limonene" value={limonene} onChange={(e) => {
                                            setpro({
                                                ...pro, limonene: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Myrcene %</InputLabel>
                                        <TextField fullWidth size="small" name="myrcene" value={myrcene} onChange={(e) => {
                                            setpro({
                                                ...pro, myrcene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Ocimene %</InputLabel>
                                        <TextField fullWidth size="small" name="ocimene" value={ocimene} onChange={(e) => {
                                            setpro({
                                                ...pro, ocimene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <InputLabel>Alpha-Phellandrene %</InputLabel>
                                        <TextField fullWidth size="small" name="alpha_phellandrene" value={alpha_phellandrene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_phellandrene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Alpha-Pinene %</InputLabel>
                                        <TextField fullWidth size="small" name="alpha_pinene" value={alpha_pinene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_pinene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Beta-Pinene %</InputLabel>
                                        <TextField fullWidth size="small" name="beta_pinene" value={beta_pinene} onChange={(e) => {
                                            setpro({
                                                ...pro, beta_pinene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Alpha-Terpinene %</InputLabel>
                                        <TextField fullWidth size="small" name="alpha_terpinene" value={alpha_terpinene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_terpinene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Terpineol %</InputLabel>
                                        <TextField fullWidth size="small" name="terpineol" value={terpineol} onChange={(e) => {
                                            setpro({
                                                ...pro, terpineol: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <InputLabel>Valencene %</InputLabel>
                                        <TextField fullWidth size="small" name="valencene" value={valencene} onChange={(e) => {
                                            setpro({
                                                ...pro, valencene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={2}>
                                        <InputLabel>Product Image</InputLabel>
                                        <TextField type='file' fullWidth size="small"
                                            onChange={(e) => setpro({ ...pro, img: e.target.files[0] })} />
                                    </Grid>
                                    <Box sx={{ marginLeft: 2, width: 60, height: 60 }}>
                                        {pro.img && (
                                            <img
                                                style={{ borderRadius: 1, width: '100%', height: '100%', objectFit: 'cover' }}
                                                src={`https://medical.studiomyraa.com/public/uploads/images/${pro.img}`}
                                                alt="Clinic Logo"
                                            />
                                        )}
                                    </Box>
                                </Grid>

                                <button onClick={handleUpdate} type='submit' style={{ border: '0px solid red', borderRadius: 4, backgroundColor: 'green', color: 'white', padding: 10, marginLeft: '100px', marginTop: '5px' }} >
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



export default EditSingleProduct;
