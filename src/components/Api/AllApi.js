import Cookies from "js-cookie";
import Url from '../../url/Allurl'
// Retrieve the data from LocalStorage
const dataFromLocalStorage = localStorage.getItem("provider");

// Parse the JSON data back to an object
const parsedData = JSON.parse(dataFromLocalStorage);

console.log(parsedData, "LLLL")
// const parsedData = {
//     "id": 744,
//     "prefix": null,
//     "name": "provider hhhh",
//     "lname": null,
//     "mname": null,
//     "role": "provider",
//     "username": null,
//     "email": "provider@gmail.com",
//     "company_id": 1,
//     "clinic_id": null,
//     "doctor_id": null,
//     "img": null,
//     "address": null,
//     "address2": null,
//     "email_verified_at": null,
//     "phone": 5050505051,
//     "gender": null,
//     "dob": null,
//     "about": null,
//     "signature": null,
//     "city": null,
//     "state": null,
//     "pincode": null,
//     "emergency": null,
//     "referring_doc": null,
//     "doc_license": null,
//     "doctor_state": null,
//     "doctor_phone": null,
//     "social_security": null,
//     "registry_id": null,
//     "prefername": null,
//     "rating": null,
//     "status": "deactive",
//     "security_group": null,
//     "appointment_color": null,
//     "account_enabled": null,
//     "accepts_ppointments": null,
//     "document_signatory": null,
//     "created_at": "2023-08-07T04:53:15.000000Z",
//     "updated_at": "2023-08-21T07:29:38.000000Z",
//     "last_login": "2023-08-21 07:29:38",
//     "company": [
//         {
//             "id": 1,
//             "company_name": "dipanshutech pvt ltd.",
//             "email": "sadnand@gmail.com",
//             "phone": 1222,
//             "address": "DSFSDF",
//             "state": "PATNA",
//             "postal_code": "231",
//             "timezone": "11",
//             "free_delivery": "yes",
//             "in_store_pickup": "yes",
//             "flate_rate": "no",
//             "created_at": "2023-07-24T09:10:30.000000Z",
//             "updated_at": "2023-08-14T05:16:32.000000Z"
//         }
//     ]
// }
// const parsedData = [{
//     id:1
// }]
// Now, "parsedData" will contain the full object with all the properties that were originally present in the `data` object

export const LoginApi = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var formdata = new FormData();
    formdata.append("email_phone", email);
    formdata.append("password", password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch(`${Url}/api/login_action`, requestOptions)
        .then(response => response.text())
        .then(result => {
            // Assuming the API response includes information about successful login
            return result; // Return the API response to the caller
        })
        .catch(error => {
            throw error; // Rethrow the error to be handled by the caller
        });
}


export const ProfileApi = () => {

    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/profile`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



console.log(parsedData, "AL Data AAAAAAAAAAAAAAAAAAAAA");

const ValueID = parsedData?.id;
const ClinicID = parsedData?.company_id;
console.log(ValueID, "This IS Clinic Single ID")
console.log(ClinicID, "This IS Clinic  ID")


export const UpdateProfileData = (name, lname, email, address, address2, city, dob, phone, pincode, state, imageDataToUpdate, about) => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("lname", lname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("address2", address2);
    formdata.append("city", city);
    formdata.append("pincode", pincode);
    formdata.append("dob", dob);
    formdata.append("state", state);
    formdata.append("img", imageDataToUpdate);
    formdata.append("about", about);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_provider_profile`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const LogoutProfile = () => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/logout`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const ViewProduct = () => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${Url}/api/view_product`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}




export const SingleProvider = (p_id) => {
    console.log(p_id,)
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/providerwise_product/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const SingleProductProvider = (p_id) => {
    console.log(p_id,)
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_product/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const AddPatientapi = (values) => {
    const { FirstName, Email, Phone, password, MiddleName, LastName, PreferName, BirthDate, Gender, Address, Address2, City, State, Pincode, Emergency, Referring_Doctor, Doctor_license, Doctor_State, Doctor_phone, SocialSecurity, Registry_id } = values;
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    FirstName && formdata.append("name", FirstName);
    Email && formdata.append("email", Email);
    Phone && formdata.append("phone", Phone);
    password && formdata.append("password", password);
    MiddleName && formdata.append("mname", MiddleName);
    LastName && formdata.append("lname", LastName);
    PreferName && formdata.append("prefername", PreferName);
    BirthDate && formdata.append("dob", BirthDate);

    formdata.append("gender", Gender);
    formdata.append("address", Address);
    formdata.append("address2", Address2);
    formdata.append("city", City);
    formdata.append("state", State);
    formdata.append("pincode", Pincode);
    formdata.append("emergency", Emergency);
    formdata.append("referring_doc", Referring_Doctor);
    formdata.append("doc_license", Doctor_license);
    formdata.append("doctor_state", Doctor_State);
    formdata.append("doctor_phone", Doctor_phone);
    formdata.append("social_security", SocialSecurity);
    formdata.append("registry_id", Registry_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const GetAllPatientData = () => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const GetAllOrdersData = () => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/view_order_in_provider/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const GetAllProductsData = () => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/view_product`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}




export const addProductesData = (values) => {

    const { productName, productCategory, Species, ProductType, method, brand, strain, amount, saleAmount, THCDosage, CbdDosage, Cbn, Unit, UnitType, PostID, RemainingAmount, Description, Ingredients, THC, CBD, CBG, CBC, THCA, THCVA, CBDA, CBGA, IMG, camphene, caryophyllene_oxide, fenchol, geraniol, alpha_humulene, alpha_phellandrene, alpha_pinene, alpha_terpinene, linalool, limonene, myrcene, ocimene, beta_caryophyllene, beta_pinene, terpineol, valencene } = values;
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("product_name", productName);
    formdata.append("product_category", productCategory);
    formdata.append("product_type", ProductType);
    formdata.append("species", Species);
    formdata.append("method", method);
    formdata.append("brand", brand);
    formdata.append("strain", strain);
    formdata.append("amount", amount);
    formdata.append("sale_amount", saleAmount);
    formdata.append("thc_dosage", THCDosage);
    formdata.append("cbd_dosage", CbdDosage);
    formdata.append("cbn", Cbn);
    formdata.append("unit", Unit);
    formdata.append("unit_type", UnitType);
    formdata.append("pos_id", PostID);
    formdata.append("remaining_amount", RemainingAmount);
    formdata.append("description", Description);
    formdata.append("ingredients", Ingredients);
    formdata.append("THC", THC);
    formdata.append("CBD", CBD);
    formdata.append("CBG", CBG);
    formdata.append("CBC", CBC);
    formdata.append("THCA", THCA);
    formdata.append("THCVA", THCVA);
    formdata.append("CBDA", CBDA);
    formdata.append("CBGA", CBGA);
    formdata.append("img", IMG, `/C:/Users/user/Downloads/${IMG}`);
    formdata.append("names[0]", "www");
    formdata.append("price[0]", "555");
    formdata.append("sale_price[0]", "898");
    formdata.append("THC_dosage[0]", "2");
    formdata.append("CBD_dosage[0]", "8");
    formdata.append("inventory[0]", "vv");
    formdata.append("camphene", camphene);
    formdata.append("beta_caryophyllene", beta_caryophyllene);
    formdata.append("caryophyllene_oxide", caryophyllene_oxide);
    formdata.append("fenchol", fenchol);
    formdata.append("geraniol", geraniol);
    formdata.append("alpha_humulene", alpha_humulene);
    formdata.append("linalool", linalool);
    formdata.append("limonene", limonene);
    formdata.append("myrcene", myrcene);
    formdata.append("ocimene", ocimene);
    formdata.append("alpha_phellandrene", alpha_phellandrene);
    formdata.append("alpha_pinene", alpha_pinene);
    formdata.append("beta_pinene", beta_pinene);
    formdata.append("alpha_terpinene", alpha_terpinene);
    formdata.append("terpineol", terpineol);
    formdata.append("valencene", valencene);
    formdata.append("company_id", ClinicID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_Product`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const AddTemplate = (values) => {
    const { TemplateName, Template } = values;
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("template_name", TemplateName);
    formdata.append("template", Template);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_template`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const EditTemplateer = (p_id) => {
    console.log(p_id, "A")
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_template/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const UpdateTemplate = (p_id, template_name, template) => {
    console.log(p_id, "TTTTTTTTTTTTTTTTTTTtt")
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("id", p_id);
    formdata.append("template_name", template_name);
    formdata.append("template", template);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_template`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const DeleteTemplate = (id) => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${Url}/api/delete_template/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}



export const GetAllTemplate = () => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_template/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const FindPatientdataer = (formdata) => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/find_patient`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const FindOrertyj = (formdata) => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/find_order`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const BookAppointment = (formData) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData, // Fix the variable name here
        redirect: 'follow'
    };

    return fetch(`${Url}/api/clinic_appointment`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
};



export const GetTypeAppointment = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_type_inprovider/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetPatientAppointment = (patientName) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/search_patient_inclinic?name=${patientName}&clinic_id=${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetLocation = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_location/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetEmployess = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_employee_inclinic/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetBilling = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/billing_invoice/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));


}

export const GetBillingInvoice = (invoiceTitle, invoiceDate, selectedPatientId, description, amount) => {
    let token = Cookies.get("provider"); // Assuming you have the Cookies library available
    console.log(token, "This Is token for all Api's");
    const randomInvoiceNumber = Math.floor(Math.random() * 1000) + 1;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", selectedPatientId);
    formdata.append("clinic_id", ClinicID);
    formdata.append("title", invoiceTitle);
    formdata.append("invoice_date", invoiceDate);
    formdata.append("invoice_number", randomInvoiceNumber);

    // Assuming 'description' and 'amount' are arrays
    description.forEach((desc, index) => {
        formdata.append(`description[${index}]`, desc);
    });

    amount.forEach((amt, index) => {
        formdata.append(`amount[${index}]`, amt);
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    // Replace the API endpoint URL with your actual endpoint
    return fetch(`${Url}/api/generate_new_invoice`, requestOptions)
        .then((result) => {
            if (!result.ok) {
                throw new Error("Network response was not ok");
            }
            return result.json();
        })
        .catch((error) => {
            console.error('Error:', error);
            throw error;
        });
};


export const GetBillingCancel = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("is_deleted", "1");
    formdata.append("id", id);
    alert(id)
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/cancel_invoice`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));

}


export const UpdateManageClinicProfile = (clinic_name, state, postal_code, address, email, phone, timezone) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("company_name", clinic_name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("postal_code", postal_code);
    formdata.append("state", state);
    formdata.append("timezone", timezone);
    formdata.append("id", ClinicID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_provider_company`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const CreateNewUser = (values) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('company_id', ClinicID); // You may need to define ClinicID somewhere.
    formdata.append('name', values.Name);
    formdata.append('username', values.Username);
    formdata.append('lname', values.LastName);
    formdata.append('email', values.Email);
    formdata.append('phone', values.Phone);
    formdata.append('password', values.Password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_provider_employee`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetAllUSers = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_provider_employee/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const AddSecurityGroup = (subject) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("name", subject);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_clinics_security_groups`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GettSecurityData = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinics_security_groups/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const editSecurityData = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_clinics_security_groups/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const UpdateSecurity = (id, name) => {
    console.log(id, "wwwwwwwwwwwwwwwwwwwwwww")
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinics_security_groups`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const deleteSecurity = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_single_clinics_security_groups/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetSingleClinicUser = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_clinic_users/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const updateUserData = (p_id, username, name, lname, email, phone, password,) => {
    console.log("Thcgvsbndsxzfhdgxcgfwdhjz", p_id, username, name, lname, email, phone, password,)
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("name", name);
    formdata.append("lname", lname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("password", password);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_provider_employee`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetAllSecurityLocation = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_providers_coupons/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const AddSecurityLocation = (values) => {
    const { LocationName, LocationPhoneNumber, AddressLine, AddressLine1, City, PostalCode, State } = values;
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("provider_company_id", ClinicID)
    formdata.append("name", LocationName);
    formdata.append("code", LocationPhoneNumber);
    formdata.append("discount", AddressLine);
    formdata.append("discountType", AddressLine1);
    formdata.append("description", City);
    formdata.append("expiration", State);
    formdata.append("is_public", "");
    formdata.append("patient_uses", PostalCode);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_providers_coupons`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetSingleSecondaryLocation = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_providers_coupons/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateSecondaryLocation = (p_id, name, code, description, discount, id, discountType, expiration, patient_uses) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("id", p_id)
    formdata.append("name", name);
    formdata.append("code", code);
    formdata.append("discount", discount);
    formdata.append("discountType", discountType);
    formdata.append("description", description);
    formdata.append("expiration", expiration);
    formdata.append("is_public", "");
    formdata.append("patient_uses", patient_uses);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_providers_coupons`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteSecondaryLoaction = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_providers_coupons/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

// Appointment Type

export const AddAppointmentTypedes = (values) => {
    const { Name, Length } = values;
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("provider_company_id", ClinicID);
    formdata.append("name", Name);
    formdata.append("length", Length);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/provider_appointment_type`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetSingleAppointmentType = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_appointment_type_inclinic/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateAppointmentType = (p_id, name, length) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("length", length);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinic_appointment_type`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteAppointmentType = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_appointment_type_inclinic/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetSinglePAtient = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_patient/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const getNotesData = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_notes/${ClinicID}/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDNotes = (subject) => {

    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", ValueID);
    formdata.append("clinic_id", ClinicID);
    formdata.append("doctor_id", ValueID);
    formdata.append("note", subject);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_notes`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteNotes = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_patient_notes/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetSingleNotes = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_patient_notes/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateNotes = (p_id, note) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("note", note);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_notes`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

// DDLC

export const getDOContactList = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_DNC/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDDOContactList = (FirstName, LastName, Relationship) => {

    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", ValueID);
    formdata.append("clinic_id", ClinicID);
    formdata.append("fname", FirstName);
    formdata.append("lname", LastName);
    formdata.append("relationship", Relationship);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_DNC`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteDOContactList = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_patient_DNC/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetSingleDOContactList = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_patient_DNC/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetSingleProduct = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_product/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const updateProductData = (p_id, product_name, product_category, CBC, CBD, CBDA, CBG, CBGA, THC, THCA, THCVA, alpha_humulene
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
    , species, strain, terpineol, thc_dosage, unit, unit_type, valencene) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("product_name", product_name);
    formdata.append("product_category", product_category);
    formdata.append("product_type", product_type);
    formdata.append("species", species);
    formdata.append("method", method);
    formdata.append("brand", brand);
    formdata.append("strain", strain);
    formdata.append("amount", amount);
    formdata.append("sale_amount", sale_amount);
    formdata.append("thc_dosage", thc_dosage);
    formdata.append("cbd_dosage", cbd_dosage);
    formdata.append("cbn", cbn);
    formdata.append("unit", unit);
    formdata.append("unit_type", unit_type);
    formdata.append("pos_id", pos_id);
    formdata.append("remaining_amount", remaining_amount);
    formdata.append("description", description);
    formdata.append("ingredients", ingredients);
    formdata.append("THC", THC);
    formdata.append("CBD", CBD);
    formdata.append("CBG", CBG);
    formdata.append("CBC", CBC);
    formdata.append("THCA", THCA);
    formdata.append("THCVA", THCVA);
    formdata.append("CBDA", CBDA);
    formdata.append("CBGA", CBGA);
    formdata.append("img", img, `/C:/Users/user/Downloads/${img}`);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_Product`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateDOContactList = (p_id, fname, lname, relationship) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("fname", fname);
    formdata.append("lname", lname);
    formdata.append("relationship", relationship);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_DNC`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetClinicShedule = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_providers_thankyoupage/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const ADDEMAILTES = (values) => {
    const { Name, Subject, EmailContent } = values;
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("provider_company_id", ClinicID);
    formdata.append("content", EmailContent);
    formdata.append("name", Name);
    formdata.append("subject", Subject);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_providers_emailtemplate`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const ADDSMSTES = (values) => {
    const { Name, EmailContent } = values;
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("provider_company_id", ClinicID);
    formdata.append("content", EmailContent);
    formdata.append("name", Name);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_providers_smstemplate`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetEmailTemplate = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_providers_emailtemplate/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetSmsTemplate = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_providers_smstemplate/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetTriggerTemplate = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_providers_trigger/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDClinicShedule = (DoctorID, Day, Start, Stop) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("doctor_id", DoctorID);
    formdata.append("clinic_id", ClinicID);
    formdata.append("dotw", Day);
    formdata.append("start", Start);
    formdata.append("stop", Stop);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_clinic_schedule`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteCLinicShedule = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_product/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteTrigger = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_trigger/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteSmsTemplate = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_smstemplate/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const DeleteEmailTemplate = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_emailtemplate/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GEtSingleCliniocShedule = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_providers_thankyoupage/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GEtEmailSingle = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_emailtemplate/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GEtSMSSingle = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_smstemplate/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UPdateCLincicShedule = (content,id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's22222222222222222222222222222");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("content", content);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_providers_thankyoupage`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const AddThankuPage = (content) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's222222222222222222222222222222222222222222");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var formdata = new FormData();
    formdata.append("provider_company_id", "1");
    formdata.append("content", content);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_providers_thankyoupage`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const UPdateSms = (id, name, content) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("content", content);
    formdata.append("name", name);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_providers_smstemplate`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}





export const UPdateEmailTemplate = (id, name, subject, content) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("subject", subject);
    formdata.append("content", content);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_providers_emailtemplate`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetAppointmtentREwie = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_request/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

// 12-08-2023
export const GetAllPatientFiles = (p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_files/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDPatientFiles = (names, fileI, isVisibleToPatient, p_id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", p_id);
    formdata.append("doctor_id", "703");
    formdata.append("clinic_id", ClinicID);
    formdata.append("name", names);
    formdata.append("file", fileI);
    formdata.append(
        "is_patient_visible",
        isVisibleToPatient !== false ? isVisibleToPatient : 0
    );


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_files`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const DEeletPatientFiles = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_patient_files/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const EDITPatientFiles = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_patient_files/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}
export const UpdatePatientFiles = (name, img, id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", "bobby");
    formdata.append("is_patient_visible", "1");
    formdata.append("file", img);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_files`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const getCertificate = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_certificates_in_patient/704`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const AddCertificate = (CertificateDate, CertificateExpiry, Diagnoses, Notes, InternalNotes, selectedDoctorId) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", "704");
    formdata.append("doctor_id", "703");
    formdata.append("clinic_id", ClinicID);
    formdata.append("certificate_date", CertificateDate);
    formdata.append("diagnoses", Diagnoses);
    formdata.append("certificate_expiry", CertificateExpiry);
    formdata.append("notes", Notes);
    formdata.append("internal_notes", InternalNotes);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_certificate_details`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteCertificate = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_certificates_in_patient/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetCertficateOrder = () => {

    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_certificate_order/2`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const ADDCERTIFICATEORDER = (StartDate, EXPIRE) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("certificate_id", 2);
    formdata.append("start_date", StartDate);
    formdata.append("expiration", EXPIRE);
    formdata.append("is_delivery_device", "0");
    formdata.append("dosage[0]", "1");
    formdata.append("dosesPerDay[0]", "1");
    formdata.append("consumptionMethod[0]", "oral");
    formdata.append("dosage[1]", "1");
    formdata.append("dosesPerDay[1]", "0");
    formdata.append("consumptionMethod[1]", "oral");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_certificate_order`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteCertificateOrder = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_certificate_order/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GEtReportClinicSheduleToday = () => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/today_clinic_appointment/1`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetTodayClinicSheduleFilter = (Date, TodayDoctorID) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("date", Date);
    formdata.append("doctor_id", TodayDoctorID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/Clinic_Daily_Schedule_Report_Filter`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const ADDTrigger = (values) => {
    const { Name, EmailContent, Delay, Tem, status, Noti } = values;
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("company_id", ClinicID);
    formdata.append("sms_template_id", Tem);
    formdata.append("triggerName", Name);
    formdata.append("description", EmailContent);
    formdata.append("event", status);
    formdata.append("delay", Delay);
    formdata.append("notificationType", Noti);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_providers_trigger`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}





export const EDITTrigger = (id) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_trigger/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ChangePasswordPatient = (values) => {
    let { current_password, password, password_confirmation } = values;
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("current_password", current_password);
    formdata.append("password", password);
    formdata.append("password_confirmation", password_confirmation);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/changePassword`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const UpdateTrigger = (id, description, delay, notificationType, sms_template_id, triggerName, event) => {
    let token = Cookies.get("provider");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("sms_template_id", sms_template_id);
    formdata.append("email_template_id", "39");
    formdata.append("triggerName", triggerName);
    formdata.append("description", description);
    formdata.append("event", event);
    formdata.append("delay", delay);
    formdata.append("notificationType", notificationType)
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_providers_trigger`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}





export const UpdatePatientData = (id, name, lname, mname, prefername, email, registry_id, gender, pincode, address, address2, city, state, dob, phone, social_security, img) => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("mname", mname);
    formdata.append("lname", lname);
    formdata.append("prefername", prefername);
    formdata.append("dob", dob);
    formdata.append("gender", gender);
    formdata.append("address", address);
    formdata.append("address2", address2);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("pincode", pincode);
    formdata.append("social_security", social_security);
    formdata.append("registry_id", registry_id);
    formdata.append("id", id);
    formdata.append("img", img);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_in_provider`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const AllAppointmentDetails = () => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_inprovider/1`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const GetSingleAppp = (eventId) => {
    let token = Cookies.get("provider")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_appointment_inclinic/${eventId}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}