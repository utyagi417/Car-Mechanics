

// DIESEL
// PETROL
// ELECTRIC
// CNG

// DIESEL-PETROL,
// DIESEL-CNG,
// DIESEL-ELECTRIC,
// PETROL-CNG,
// PETROL-ELECTRIC
// CNG-ELECTRIC

// DIESEL-PETROL-CNG,
// DIESEL-PETROL-ELECTRIC,
// DIESEL-CNG-ELECTRIC,
// PETROL-CNG-ELECTRIC,

// DIESEL-PETROL-ELECTRIC-CNG




const Models = [
    // Brand No. B001 Lamborghini
    {   
        model_no: "B1-M001",
        isActive: true,
        for_brand: "B001",
        model_name: "Urus",
        model_img: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-23-model-599.jpeg",
        service_no: "S001",
        fuel_id: "DIESEL-PETROL-ELECTRIC-CNG",
    },
    {
        model_no: "B1-M002",
        isActive: true,
        for_brand: "B001",
        model_name: "Aventador",
        model_img: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-23-model-425.jpeg",
        service_no: "S002",
        fuel_id: "DIESEL-PETROL",
    },
    // Brand No. B003 Jaguar
    {
        model_no: "B2-M001",
        isActive: true,
        for_brand: "B002",
        model_name: "F-Type",
        model_img: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-22-model-421.jpeg",
        service_no: "S003",
        fuel_id: "PETROL-CNG",
    },
    {
        model_no: "B2-M002",
        isActive: true,
        for_brand: "B002",
        model_name: "XF",
        model_img: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-22-model-423.jpeg",
        service_no: "S004",
        fuel_id: "DIESEL-CNG-ELECTRIC",
    },
    // Brand No. B003 Audi
    {
        model_no: "B3-M001",
        isActive: true,
        for_brand: "B003",
        model_name: "Q3",
        model_img: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-18-model-393.jpeg",
        service_no: "S005",
        fuel_id: "CNG-ELECTRIC",
    },
    {
        model_no: "B3-M002",
        isActive: true,
        for_brand: "B003",
        model_name: "Q7",
        model_img: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-18-model-395.jpeg",
        service_no: "S006",
        fuel_id: "PETROL-ELECTRIC",
    },
]


export default Models;