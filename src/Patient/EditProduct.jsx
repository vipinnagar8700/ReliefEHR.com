import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
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
import { GetSingleProduct, addProductesData, updateProductData } from '@components/Api/AllApi';
import Cookies from 'js-cookie';





const EditSingleProduct = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [pro, setpro] = useState(false)

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
        setSelectedTab('');
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
                    console.log(data.messege, "thtrtrer;ojgsrdbehx");
                    alert(data.messege);

                })
            } else {
                console.log("error")
            }

            console.log(result, "Data Updated Successfully");
        } catch (error) {
            console.error("Error occurred while updating data:", error);
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
                                        <Select fullWidth size='small' name="product_category" value={product_category} onChange={(e) => {
                                            setpro({
                                                ...pro, product_category: e.target.value
                                            })
                                        }} >
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
                                        <Select fullWidth size='small' name="species" value={species} onChange={(e) => {
                                            setpro({
                                                ...pro, species: e.target.value
                                            })
                                        }}>
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
                                        <Select fullWidth size='small' name="method" value={method} onChange={(e) => {
                                            setpro({
                                                ...pro, method: e.target.value
                                            })
                                        }}>
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
                                        <TextField fullWidth size="small" name="brand" value={brand} onChange={(e) => {
                                            setpro({
                                                ...pro, brand: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    {/* ;ljhgfc */}
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="strain" value={strain} onChange={(e) => {
                                            setpro({
                                                ...pro, strain: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    {/* <InputLabel>Pricing & Dosage</InputLabel> */}
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="amount" value={amount} onChange={(e) => {
                                            setpro({
                                                ...pro, amount: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="sale_amount" value={sale_amount} onChange={(e) => {
                                            setpro({
                                                ...pro, sale_amount: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <Select fullWidth size='small' name="unit_type" value={unit_type} onChange={(e) => {
                                            setpro({
                                                ...pro, unit_type: e.target.value
                                            })
                                        }}>
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
                                        <TextField fullWidth size="small" name="thc_dosage" value={thc_dosage} onChange={(e) => {
                                            setpro({
                                                ...pro, thc_dosage: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="cbd_dosage" value={cbd_dosage} onChange={(e) => {
                                            setpro({
                                                ...pro, cbd_dosage: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    {/* <InputLabel>Cannabinoids</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="cbn" value={cbn} onChange={(e) => {
                                            setpro({
                                                ...pro, cbn: e.target.value
                                            })
                                        }} />

                                    </Grid>

                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="unit" value={unit} onChange={(e) => {
                                            setpro({
                                                ...pro, unit: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="pos_id" value={pos_id} onChange={(e) => {
                                            setpro({
                                                ...pro, pos_id: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="remaining_amount" value={remaining_amount} onChange={(e) => {
                                            setpro({
                                                ...pro, remaining_amount: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="description" value={description} onChange={(e) => {
                                            setpro({
                                                ...pro, description: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="ingredients" value={ingredients} onChange={(e) => {
                                            setpro({
                                                ...pro, ingredients: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="THC" value={THC} onChange={(e) => {
                                            setpro({
                                                ...pro, THC: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="CBD" value={CBD} onChange={(e) => {
                                            setpro({
                                                ...pro, CBD: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="CBG" value={CBG} onChange={(e) => {
                                            setpro({
                                                ...pro, CBG: e.target.value
                                            })
                                        }} />

                                    </Grid>

                                    {/* <InputLabel>Terpenes</InputLabel> */}

                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="CBC" value={CBC} onChange={(e) => {
                                            setpro({
                                                ...pro, CBC: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="THCA" value={THCA} onChange={(e) => {
                                            setpro({
                                                ...pro, THCA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="THCVA" value={THCVA} onChange={(e) => {
                                            setpro({
                                                ...pro, THCVA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="CBDA" value={CBDA} onChange={(e) => {
                                            setpro({
                                                ...pro, CBDA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="CBGA" value={CBGA} onChange={(e) => {
                                            setpro({
                                                ...pro, CBGA: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="camphene" value={camphene} onChange={(e) => {
                                            setpro({
                                                ...pro, camphene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="beta_caryophyllene" value={beta_caryophyllene} onChange={(e) => {
                                            setpro({
                                                ...pro, beta_caryophyllene: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="caryophyllene_oxide" value={caryophyllene_oxide} onChange={(e) => {
                                            setpro({
                                                ...pro, caryophyllene_oxide: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3} >
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
                                        <TextField fullWidth size="small" name="geraniol" value={geraniol} onChange={(e) => {
                                            setpro({
                                                ...pro, geraniol: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="alpha_humulene" value={alpha_humulene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_humulene: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="linalool" value={linalool} onChange={(e) => {
                                            setpro({
                                                ...pro, linalool: e.target.value
                                            })
                                        }} />

                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="limonene" value={limonene} onChange={(e) => {
                                            setpro({
                                                ...pro, limonene: e.target.value
                                            })
                                        }} />

                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="myrcene" value={myrcene} onChange={(e) => {
                                            setpro({
                                                ...pro, myrcene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="ocimene" value={ocimene} onChange={(e) => {
                                            setpro({
                                                ...pro, ocimene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="alpha_phellandrene" value={alpha_phellandrene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_phellandrene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="alpha_pinene" value={alpha_pinene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_pinene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="beta_pinene" value={beta_pinene} onChange={(e) => {
                                            setpro({
                                                ...pro, beta_pinene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="alpha_terpinene" value={alpha_terpinene} onChange={(e) => {
                                            setpro({
                                                ...pro, alpha_terpinene: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="terpineol" value={terpineol} onChange={(e) => {
                                            setpro({
                                                ...pro, terpineol: e.target.value
                                            })
                                        }} />
                                    </Grid><Grid items sx={6} md={3}>
                                        <TextField fullWidth size="small" name="valencene" value={valencene} onChange={(e) => {
                                            setpro({
                                                ...pro, valencene: e.target.value
                                            })
                                        }} />
                                    </Grid>
                                    <Grid items sx={6} md={3}>
                                        <TextField type='file' fullWidth size="small"
                                            onChange={(e) => setpro({ ...pro, img: e.target.files[0] })} />
                                    </Grid>
                                    <Box sx={{ marginLeft: 20, width: 40, height: 40 }}>
                                        {pro.img && (
                                            <img
                                                style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                                                src={`https://medical.studiomyraa.com/public/uploads/images/${pro.img}`}
                                                alt="Clinic Logo"
                                            />
                                        )}
                                    </Box>
                                </Grid>

                                <button onClick={handleUpdate} type='submit' style={{ border: '0px solid red', borderRadius: 4, backgroundColor: 'green', color: 'white', padding: 10 }} >
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
